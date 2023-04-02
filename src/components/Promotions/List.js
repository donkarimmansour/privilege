import react, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/promotions/reducer';
import { checkRole, checkString, extractDesk, loader } from '../../common/funs';
import ReactPaginate from 'react-paginate';
import ActionsModal from '../shared/ActionsModal';
import moment from 'moment';
import { countPromotions, deletePromotion, getPromotions } from '../../redux/promotions/action';

const List = ({setEditPromotionId}) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, promotions, count } = useSelector(state => state.promotions)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [actions, setActions] = useState(false)
  const [modalState, toggleModal] = useState(false)
  const { user } = useSelector(state => state.auth)
  const limit = 20

  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getPromotions({ sort: { _id: -1 }, expend: "language", skip: skip, limit: limit }))
    dispatch(countPromotions({}))
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

    //send to edit section
    const OnEdit = (_id, evt) => {
      setEditPromotionId(_id)
  
      evt.target.closest(".tab-pane").classList.remove("active")
      evt.target.closest(".tab-content").children[1].classList.add("active")
  
      document.querySelector(".page .nav-tabs .nav-item .nav-link").classList.remove("active")
      document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.add("active")
  
    }

  //delete promotion
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
        dispatch(deletePromotion(_id))
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

    <div className="tab-pane active" id="promotion-all">

      <ActionsModal modalState={modalState} toggleModal={toggleModal} actions={actions} />

      {loading && loader()}

      <div className="table-responsive">
        <div className="table-responsive card">
          <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
            <thead>
              <tr>
                <th>#.</th>
                <th>{t("Name")}</th>
                <th>{t("Description")}</th>
                <th>{t("Hours")}</th>
                <th>{t("Language")}</th>
                <th>{t("Date")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>

              {promotions.length > 0 && promotions.map((p, pi) => {
                return (
                  <Fragment key={pi}>

                    <tr>
                      <td>{pi + 1}</td>

                      <td>{p.name}</td>
                      <td>{extractDesk(p?.description, 50)}</td>
                      <td>{p.session?.hours}</td>
                      <td>{p?.language?.name}</td>
                      <td>{moment(p.updatedAt).format("DD/MM/YYYY")}</td>

                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(p._id, e) }}><i className="fa fa-edit" /></button>
                        <button type="button" className="btn btn-icon btn-sm" title="Actions" onClick={() => { ActionsPupup(p.actions) }}><i className="fa fa-eye" /></button>
                        { checkRole(user.role, "superAdmin") && <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(p._id) }} title="Delete"><i className="fa fa-trash-o text-danger" /></button>}
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
        previousLabel={t("previous")}
        nextLabel={t("next")}
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