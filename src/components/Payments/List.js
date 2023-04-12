import react, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkRole, checkString, loader } from '../../common/funs';
import { countPayment, deletePayment, getPayment } from '../../redux/payments/action';
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';
import { cleanAlerts } from '../../redux/payments/reducer';
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import moment from "moment";

const List = ({ _setEditPaymentId }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success, payments, count } = useSelector(state => state.payments)
  const [modalState, toggleModal] = useState(false)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [actions, setActions] = useState(false)
  const { user } = useSelector(state => state.auth)
  const [filters, setFilters] = useState({ lastname: "", from: "", to: "", firstname: "" });
  const limit = 20

  //handle init
  useEffect(() => {
     handleSearch()
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


  //handle Search
  const handleSearch = () => {
    let nameFilter = []
    let dateFilter = {}


    for (const key in filters) {
      if (filters[key] !== "") {
        if (key === "firstname" || key === "lastname") {
          nameFilter.push({[key]: { $regex: filters[key], $options: "i" } })
        }
         else if (key === "from") { 
          dateFilter.updatedAt = { ...dateFilter.updatedAt, $gte: filters[key] }
        } else if (key === "to") {
          dateFilter.updatedAt = { ...dateFilter.updatedAt, $lte: filters[key] }
        }

      }
    }
  
    if (nameFilter.length > 0) {
      nameFilter = { $or: nameFilter }
    } else {
      nameFilter = { lastname: { $ne: "xxxlxxxx" } }
    }

    
    if (dateFilter.updatedAt?.["$gte"] || dateFilter.updatedAt?.["$lte"]) {
      dateFilter = dateFilter
    } else {
      dateFilter = { updatedAt: { $ne: "xxxlxxxx" } }
    }


    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit
    dispatch(getPayment({ sort: { _id: -1 }, filter: { ...nameFilter, ...dateFilter, status: "active" }, expend: "all", skip: skip, limit: limit }))
    dispatch(countPayment({ filter: { ...nameFilter, ...dateFilter, status: "active" } }))

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

          <div className="row">

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" name="firstname" className="form-control" onChange={(e) => { setFilters({ ...filters, firstname: e.target.value }) }} placeholder={t("First Name")} />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" name="lastname" className="form-control" onChange={(e) => { setFilters({ ...filters, lastname: e.target.value }) }} placeholder={t("Last Name")} />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <DatePicker selected={filters.from !== "" ? new Date(filters.from) : new Date()} onChange={(e) => { setFilters({ ...filters, from: e }) }} className="form-control"  />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <DatePicker selected={filters.to !== "" ? new Date(filters.to) : new Date()} onChange={(e) => { setFilters({ ...filters, to: e }) }} className="form-control" />
              </div>
            </div>

            <div className="col-md-12 col-sm-12 p-3">
              <a href="#!;" onClick={handleSearch} className="btn btn-sm btn-primary btn-block" >{t("Search")}</a>
            </div>

          </div>
      

          <div className="table-responsive card">
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
                        <button type="button" className="btn btn-icon btn-sm" title="Invice" onClick={() => { navigate(`/invice/${p._id}`) }}><i className="fa fa-money" /></button>
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