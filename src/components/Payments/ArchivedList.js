import moment from 'moment';
import react, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loader } from '../../common/funs';
import { countArchivedPayment, getArchivedPayment } from '../../redux/payments/action';
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';
import { useNavigate } from 'react-router';

 
const ArchivedList = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, archivedPayments, archivedCount } = useSelector(state => state.payments)
  const [modalState, toggleModal] = useState(false)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [actions, setActions] = useState(false)
  const limit = 20

  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getArchivedPayment({ sort: { _id: -1 }, filter: { status: "archived"}, expend: "all", skip: skip, limit: limit }))
    dispatch(countArchivedPayment({filter: { status: "archived"}}))
  }, [dispatch, pageCurrent])



  //Actions Pupup
  const ActionsPupup = actions => {
    setActions(actions)
    toggleModal(true)
  }



  //handle paginate
  const handlePageClick = async (data) => {
    setPageCurrent(data.selected + 1)
  };


 
  useEffect(() => {
    if (archivedCount && typeof archivedCount === "number") {
      setPageCount(Math.ceil(archivedCount / limit));
    } else {
      setPageCount(0);
    }

  }, [archivedCount]);

  return (
    <div className="tab-pane" id="archived-all">
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

                {archivedPayments.length > 0 && archivedPayments.map((p, pi) => {
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
export default ArchivedList