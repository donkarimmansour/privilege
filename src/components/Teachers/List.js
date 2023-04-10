import { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { checkRole, checkString, ImageVIEW, loader } from '../../common/funs';
import { deleteTeacher, getTeacher } from '../../redux/teachers/action';
import { countStudent } from '../../redux/students/action';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/teachers/reducer';
import moment from 'moment';
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';

const List = ({ setEditTeacherId }) => {

 
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ lastname: "", email: "", firstname: "" });
  const { loading, error, success, teachers, count } = useSelector(state => state.teachers)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [modalState, toggleModal] = useState(false)
  const [actions, setActions] = useState(false)
  const { user } = useSelector(state => state.auth)
  const limit = 20

  //handle Search
  useEffect(() => {
    handleSearch()
  }, [dispatch , pageCurrent])


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
    setEditTeacherId(_id)

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[1].classList.add("active")

    document.querySelector(".page .nav-tabs .nav-item .nav-link").classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[2].classList.add("active")

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
        dispatch(deleteTeacher(_id))
      }
    });


  }

  //handle form input change
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })

  }

  //handle Search
  const handleSearch = () => {
    let filter = []

    for (const key in filters) {
      if (filters[key] !== "") {
        filter.push({ [key]: { $regex: filters[key], $options: "i" } })
      }
    }

    if (filter.length > 0) {
      filter = { $or: filter }
    } else {
      filter = { lastname: { $ne: "xxxlxxxx" } }
    }


    const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit
    dispatch(getTeacher({ filter, sort: { _id: -1 }, expend: "all"  , skip : skip , limit : limit}))
    dispatch(countStudent(filter))

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
    <div className="tab-pane active" id="pro-all">
                  <ActionsModal modalState={modalState} toggleModal={toggleModal} actions={actions} />

      {loading && loader()}

      <div className="card">
        <div className="card-body">
          <div className="row">

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" name="firstname" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("First Name")} />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" name="lastname" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Last Name")} />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" name="cours" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Language")} />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="#!;" onClick={handleSearch} className="btn btn-sm btn-primary btn-block" >{t("Search")}</a>
            </div>

          </div>

        </div>
      </div>
      <div className="table-responsive card">
        <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
          <thead>
            <tr>
              <th>#.</th>
              <th>{t("Name")}</th>
              <th />
              <th>{t("Language")}</th>
              <th>{t("Email")}</th>
              <th>{t("Phone")}</th>
              <th>{t("Students")}</th>
              <th>{t("Date")}</th>
              <th>{t("Action")}</th>
            </tr>
          </thead>


          <tbody>
 
            {teachers.length > 0 && teachers.map((p, pi) => {
              return (
                <Fragment key={pi}>

                <tr>
                  <td>{pi + 1}</td>
                  <td className="w60">
                    <img className="avatar" src={ImageVIEW(p.image)} alt="" />
                  </td>
                  <td><span className="font-16">{`${p.firstname} ${p.lastname}`}</span></td>
                  <td>{p.languages?.name}</td>
                  <td>{p.email}</td>
                  <td>{p.phone}</td>
                  <td>{p.studentsCount}</td>
                  <td>{moment(p.updatedAt).format("DD/MM/YYYY")}</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(p._id, e) }}><i className="fa fa-edit" /></button>
                   <button type="button" className="btn btn-icon btn-sm" title="View" onClick={() => { ActionsPupup(p.actions) }}><i className="fa fa-eye" /></button>
                    { checkRole(user.role, "superAdmin") &&  <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(p._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>}
                  </td>
                </tr>
                </Fragment>

              )
            })}


          </tbody>
        </table>
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