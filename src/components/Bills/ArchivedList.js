import moment from 'moment';
import react, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loader } from '../../common/funs';
import { countArchivedBill, getArchivedBill } from '../../redux/bills/action';
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';
 

const ArchivedList = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, archivedBills, archivedCount } = useSelector(state => state.bills)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [modalState, toggleModal] = useState(false)
  const [actions, setActions] = useState(false)
  const limit = 20

  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getArchivedBill({ sort: { _id: -1 }, filter: { status: "archived"}, expend: "studentID", skip: skip, limit: limit }))
    dispatch(countArchivedBill({filter: { status: "archived"}}))
  }, [dispatch, pageCurrent])




  //handle paginate
  const handlePageClick = async (data) => {
    setPageCurrent(data.selected + 1)
  };

   //Actions Pupup
   const ActionsPupup = actions => {
    setActions(actions)
    toggleModal(true)
  }


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
                  <th>{t("Name")}</th>
                  <th>{t("Amount")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Action")}</th>
                </tr>
              </thead> 
              <tbody>

                {archivedBills.length > 0 && archivedBills.map((b, bi) => {
                  return (
                    <tr key={bi}>
                      <td>{bi + 1}</td>
                      <td>{`${b?.studentID?.firstname} ${b?.studentID?.lastname}`}</td>
                      <td>{b.amount}</td>
                      <td>{moment(b.updatedAt).format("DD/MM/YYYY")}</td>
                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="Actions" onClick={() => { ActionsPupup(b.actions) }}><i className="fa fa-eye" /></button>
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
export default ArchivedList