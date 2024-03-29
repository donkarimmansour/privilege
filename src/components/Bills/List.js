import moment from 'moment';
import react, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkRole, checkString, loader } from '../../common/funs';
import { countBill, deleteBill, getBill } from '../../redux/bills/action';
import { cleanAlerts } from '../../redux/bills/reducer'
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';


const List = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, bills, count } = useSelector(state => state.bills)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [modalState, toggleModal] = useState(false)
  const [actions, setActions] = useState(false)
  const { user } = useSelector(state => state.auth)
  const limit = 20


  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getBill({ sort: { _id: -1 }, filter: { status: "active"}, expend: "studentID", skip: skip, limit: limit }))
    dispatch(countBill({filter: { status: "active"}}))
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



  //handle paginate
  const handlePageClick = async (data) => {
    setPageCurrent(data.selected + 1)
  };


   //Actions Pupup
   const ActionsPupup = actions => {
    setActions(actions)
    toggleModal(true)
  }


    //delete bill
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
          dispatch(deleteBill(_id))
        }
      });
  
  
    }


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
                  <th>{t("Name")}</th>
                  <th>{t("Amount")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Action")}</th>
                </tr>
              </thead> 
              <tbody>

                {bills.length > 0 && bills.map((b, bi) => {
                  return (
                    <tr key={bi}>
                      <td>{bi + 1}</td>
                      <td>{`${b?.studentID?.firstname} ${b?.studentID?.lastname}`}</td>
                      <td>{b.amount}</td>
                      <td>{moment(b.updatedAt).format("DD/MM/YYYY")}</td>
                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="Actions" onClick={() => { ActionsPupup(b.actions) }}><i className="fa fa-eye" /></button>
                        { checkRole(user.role, "superAdmin") && <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(b._id) }} title="Delete"><i className="fa fa-trash-o text-danger" /></button>}
                      </td>
                    </tr>
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