import react, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { countNotifications, deleteNotification, getNotifications } from '../../redux/notifications/action';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/notifications/reducer';
import { checkString, extractDesk, loader } from '../../common/funs';
import ReactPaginate from 'react-paginate';
import ActionsModal from '../shared/ActionsModal';
import moment from 'moment';

const List = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, notifications, count } = useSelector(state => state.notifications)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [actions, setActions] = useState(false)
  const [modalState, toggleModal] = useState(false)
  const limit = 20

  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getNotifications({ sort: { _id: -1 }, expend: "studentID", skip: skip, limit: limit }))
    dispatch(countNotifications({}))
  }, [dispatch, pageCurrent])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

    dispatch(cleanAlerts())

  }, [success, error]);


  //Actions Pupup
  const ActionsPupup = actions => {
    setActions(actions)
    toggleModal(true)
  }


  //delete notification
  const OnDelete = (_id) => {

    swal({
      title: t("Are you sure?"),
      text: t("You will not be able to recover this data"),
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
    }).then(isConfirm => {
      if (isConfirm) {
        dispatch(deleteNotification(_id))
      }
    });


  }


  //handle paginate
  const handlePageClick = async (data) => {
    setPageCurrent(data.selected + 1)
  };



  useEffect(() => {
    if (count && typeof count === "number") {
      setPageCount(Math.ceil(count / limit));
    } else {
      setPageCount(0);
    }

  }, [count]);



  return (

    <div className="tab-pane active" id="notification-all">

      <ActionsModal modalState={modalState} toggleModal={toggleModal} actions={actions} />

      {loading && loader()}

      <div className="table-responsive">
        <div className="table-responsive card">
          <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
            <thead>
              <tr>
                <th>#.</th>
                <th>{t("Title")}</th>
                <th>{t("Name")}</th>
                <th>{t("Message")}</th>
                <th>{t("Seen")}</th>
                <th>{t("Date")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>

              {notifications.length > 0 && notifications.map((n, ni) => {
                return (
                  <Fragment key={ni}>

                    <tr>
                      <td>{ni + 1}</td>

                      <td>{n.title}</td>
                      <td>{`${n.studentID?.firstname} ${n.studentID?.lastname}`}</td>
                      <td>{extractDesk(n?.message, 50)}</td>
                      <td>{n.seen ? t("Yes") : t("Nn")}</td>
                      <td>{moment(n.updatedAt).format("DD/MM/YYYY")}</td>

                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="Actions" onClick={() => { ActionsPupup(n.actions) }}><i className="fa fa-eye" /></button>
                        <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(n._id) }} title="Delete"><i className="fa fa-trash-o text-danger" /></button>
                      </td>
                    </tr>
                  </Fragment>

                )
              })}

            </tbody>
          </table>
        </div>
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        activeClassName={"active"}
      // activeLinkClassName={"active"}
      />



    </div>

  )

}

export default List