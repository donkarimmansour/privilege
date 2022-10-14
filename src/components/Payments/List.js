import moment from 'moment';
import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkString, loader } from '../../common/funs';
import { countPayment , deletePayment, getPayment } from '../../redux/payments/action';
import { cleanAlerts } from '../../redux/payments/reducer'
import myClassnames from 'classnames';


const List = ({setEditPaymentId}) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
   const { loading, error, success, payments, _count } = useSelector(state => state.payments)


  //handle Search
  useEffect(() => {
    dispatch(getPayment({ sort : {_id : -1} , expend : "all"}))
    dispatch(countPayment({}))
  }, [dispatch])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)) , "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

    dispatch(cleanAlerts())

  }, [success, error]);

 //send to edit section
 const OnEdit = (_id , evt) => { 
  setEditPaymentId(_id)

  evt.target.closest(".tab-pane").classList.remove("active")
  evt.target.closest(".tab-content").children[1].classList.add("active")
   
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



  return (
    <div className="tab-pane active" id="Fees-all">
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
                  <th>{t("Date")}</th>
                  <th>{t("Duration")}</th>
                  <th>{t("Status")}</th>
                  <th>{t("Amount")}</th>
                  <th>{t("Action")}</th>

                </tr>
              </thead>
              <tbody>

                {payments.length > 0 && payments.map((p, pi) => {
                  return (
                    <tr key={pi}>
                      <td>{pi + 1}</td>
                      <td>{`${p.studentID.firstname} ${p.studentID.lastname}`}</td>
                      <td>{p.paymentMethod}</td>
                      <td>{moment(p.updatedAt).format("DD/MM/YYYY")}</td>
                      <td>{p.paymentDuration}</td>
                      <td><span className={myClassnames("tag" , {"tag-green" : p.paymentStatus === "paid"} , {"tag-orange" : p.paymentStatus !== "paid"})}>{p.paymentStatus}</span></td>
                      <td>{p.amount}</td>
                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(p._id , e) }}><i className="fa fa-edit" /></button>
                         <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(p._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                     </td>
                    </tr> 
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )

}
export default List