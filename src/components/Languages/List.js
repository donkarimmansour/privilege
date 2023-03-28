import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkString, loader } from '../../common/funs';
import { countLanguage, deleteLanguage, getLanguage } from '../../redux/languages/action';
import { cleanAlerts } from '../../redux/languages/reducer';
import Card from './Card'
import ReactPaginate from "react-paginate";

const List = ({ setEditLanguageId }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, languages, count } = useSelector(state => state.languages)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const limit = 20

  //handle initt 
  useEffect(() => {
    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit

   dispatch(getLanguage({ sort: { _id: -1 }, skip: skip, limit: limit }))

    dispatch(countLanguage({}))
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
    setEditLanguageId(_id)

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
        dispatch(deleteLanguage(_id))
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
    <div className="tab-pane active" id="languages-all">

      {loading && loader()}

      <div className="row row-deck">
        {languages.length > 0 && languages.map((c, ci) => {

          return (<div key={ci} className="col-xl-4 col-lg-4 col-md-6">
            <Card language={c} OnEdit={OnEdit} OnDelete={OnDelete} />
          </div>)

        })}

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