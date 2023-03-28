import react, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkString, loader } from '../../common/funs';
import { cleanAlerts } from '../../redux/department/reducer';
import { countDepartment, deleteDepartment, getDepartment } from '../../redux/department/action';
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';


const List = ({ setEditDepartmentId }) => {


  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [modalState, toggleModal] = useState(false)
  const [actions, setActions] = useState(false)
  const limit = 20
  const { loading, error, success, departments, count } = useSelector(state => state.departments)


  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getDepartment({ sort: { _id: -1 }, skip: skip, limit: limit }))
    dispatch(countDepartment({}))
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
    setEditDepartmentId(_id)

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[1].classList.add("active")

    document.querySelector(".page .nav-tabs .nav-item .nav-link").classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.add("active")

  }

  //delete student
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
        dispatch(deleteDepartment(_id))
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
    <div className="tab-pane active" id="dep-all">
        <ActionsModal modalState={modalState} toggleModal={toggleModal} actions={actions} />

      {loading && loader()}

      <div className="table-responsive">
        <div className="table-responsive card">
          <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
            <thead>
              <tr>
                <th>#.</th>
                <th>{t("Floor")}</th>
                <th>{t("Class")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>

              {departments.length > 0 && departments.map((d, di) => {
                return (
                  <Fragment key={di}>

                  <tr>
                    <td>{di + 1}</td>

                    <td>{d.floorName}</td>
                    <td>{d.className}</td>
                    <td>
                      <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(d._id, e) }}><i className="fa fa-edit" /></button>
                      <button type="button" className="btn btn-icon btn-sm" title="Actions" onClick={() => { ActionsPupup(d.actions) }}><i className="fa fa-eye" /></button>
                      <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(d._id) }} title="Delete"><i className="fa fa-trash-o text-danger" /></button>
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