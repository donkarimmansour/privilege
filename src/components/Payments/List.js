import moment from 'moment';
import react, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkRole, checkString, loader } from '../../common/funs';
import { countPayment, deletePayment, getPayment } from '../../redux/payments/action';
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';
import { cleanAlerts } from '../../redux/payments/reducer';


const List = ({ _setEditPaymentId }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, payments, count } = useSelector(state => state.payments)
  const [modalState, toggleModal] = useState(false)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [actions, setActions] = useState(false)
  const { user } = useSelector(state => state.auth)
  const limit = 20

  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getPayment({ sort: { _id: -1 }, expend: "all", skip: skip, limit: limit }))
    dispatch(countPayment({}))
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

  // //send to edit section
  // const OnEdit = (_id, evt) => {
  //   setEditPaymentId(_id)

  //   evt.target.closest(".tab-pane").classList.remove("active")
  //   evt.target.closest(".tab-content").children[1].classList.add("active")

  //   document.querySelector(".page .nav-tabs .nav-item .nav-link").classList.remove("active")
  //   document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.add("active")

  // }

  //Actions Pupup
  const ActionsPupup = actions => {
    setActions(actions)
    toggleModal(true)
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
        dispatch(deletePayment(_id))
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
    <div className="tab-pane active" id="fees-all">
        <ActionsModal modalState={modalState} toggleModal={toggleModal} actions={actions} />

      {loading && loader()}

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
              <thead>
                <tr>
                  <th>#.</th>
                  <th>{t("Student Name")}</th>
                  <th>{t("Method")}</th>
                  <th>{t("Type")}</th>
                  <th>{t("Amount")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Action")}</th>

                </tr> 
              </thead>
              <tbody>

                {payments.length > 0 && payments.map((p, pi) => {
                  return (
                    <Fragment key={pi}> 

                    <tr>
                      <td>{pi + 1}</td>
                      <td>{`${p?.studentID?.firstname} ${p?.studentID?.lastname}`}</td>
                      <td>{p.paymentMethod}</td>
                      <td>{p.feesType}</td>
                      <td>{p.amount}</td>
                      <td>{moment(p.updatedAt).format("DD/MM/YYYY")}</td>
                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="View" onClick={() => { ActionsPupup(p.actions) }}><i className="fa fa-eye" /></button>
                        { checkRole(user.role, "superAdmin") && <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(p._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>}
                      </td>
                    </tr>
                    </Fragment>

                  )
                })}
              </tbody>
            </table>
          </div>
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