import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { countLibrary, deleteLibrary, getLibrary } from '../../redux/library/action';
import { checkString, loader } from '../../common/funs';
import { cleanAlerts } from '../../redux/library/reducer';
import swal from 'sweetalert';
import ReactPaginate from "react-paginate";

const List = ({ setEditLibraryId }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, libraries, count } = useSelector(state => state.library)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const limit = 20

  //handle init
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

    dispatch(getLibrary({ sort: { _id: -1 }, skip: skip, limit: limit }))
    dispatch(countLibrary({}))
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




  //send to edit section
  const OnEdit = (_id, evt) => {
    setEditLibraryId(_id)

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
        dispatch(deleteLibrary(_id))
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
    <div className="tab-pane active" id="Library-all">

      {loading && loader()}

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover js-basic-example dataTable table-striped table_custom border-style spacing5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{("Title")}</th>
                  <th>{("Language")}</th>
                  <th>{("Level")}</th>
                  <th>{("Status")}</th>
                  <th>{("Action")}</th>
                </tr>
              </thead>
              <tbody>


                {libraries.length > 0 && libraries.map((l, li) => {
                  return (
                    <tr key={li}>
                      <td>{li + 1}</td>

                      <td>{l.title}</td>
                      <td>{l.language}</td>
                      <td>{l.level}</td>
                      <td>{l.status}</td>
                      <td>
                        <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(l._id, e) }}><i className="fa fa-edit" /></button>
                        <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(l._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
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