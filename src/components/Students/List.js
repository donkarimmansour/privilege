import { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { countStudent, deleteStudent, getStudent } from '../../redux/students/action';
import swal from 'sweetalert';
import { checkRole, checkString, ImageVIEW, loader } from '../../common/funs';
import { cleanAlerts } from '../../redux/students/reducer';
import moment from "moment"; 
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';
import { getSingleGroupe } from '../../redux/groupes/action';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const List = ({setEditStudentId}) => { 

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ lastname: "", email: "", firstname: "" });
  const { loading, error, success, students, count } = useSelector(state => state.students)
  const { singleGroupe } = useSelector(state => state.groupe)
  const [pageCount, setPageCount] = useState(0);
  const navigate = useNavigate();
  const [pageCurrent, setPageCurrent] = useState(1);
  const [modalState, toggleModal] = useState(false)
  const [actions, setActions] = useState(false)
  const [teachGroup, setTeachGroup] = useState("xxxlxxx")
  const { user } = useSelector(state => state.auth)
  const limit = 20

  //handle admin Search 
  useEffect(() => {
    if (user.role !== "teacher") {
      handleSearch()
    }
  }, [dispatch, pageCurrent])

  //handle teacher Search 
  useEffect(() => {
    if (user.role === "teacher" && teachGroup !== "xxxlxxx") {
      handleSearch()
    }
  }, [pageCurrent, teachGroup])


  //start teacher section
  //get groupe
  useEffect(() => {
    if (user.role === "teacher") {
      dispatch(getSingleGroupe({ filter: { teacher: user._id } }))
    }
  }, [dispatch, user])

  //update groupe id
  useEffect(() => {
    if (singleGroupe && singleGroupe._id) {
      setTeachGroup(singleGroupe._id)
    } else {
      setTeachGroup("xxxlxxx")

    }
  }, [singleGroupe])

  //end teacher section


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)) , "success");

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
  const OnEdit = (_id , evt) => {
    setEditStudentId(_id)

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
        dispatch(deleteStudent(_id))
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
      if(filters[key] !== ""){
           filter.push( { [key] : { $regex: filters[key] , $options : "i" } })
        
      }
     }

     if(filter.length > 0){
       filter = { $or : filter }
     }else{
       filter = { lastname : { $ne : "xxxlxxxx"}  } 
     } 

     if(user.role === "teacher"){
      filter = { ...filter, group: teachGroup }
     }

     const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit
     dispatch(getStudent({filter , sort : {_id : -1} , expend : "all" , skip : skip , limit : limit}))
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
    <div className="tab-pane active" id="student-all">
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
              <input type="text" name="email" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Email")} />
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
              <th>{t("Hours")}</th>
              <th>{t("Date")}</th>
              {checkRole(user.role, "adminOrsuperAdmin") && <th>{t("Exam")}</th>}
              {user.role !== "teacher" && <th>{t("Action")}</th>}
            </tr>
          </thead>


          <tbody> 
 

            {students.length > 0 && students.map((s, si) => {
              return (
                <Fragment key={si}>

                <tr>
                  <td>{si + 1}</td>
                  <td className="w60">
                    <img className="avatar" src={ImageVIEW(s.image)} alt="" />
                  </td>
                  <td><span className="font-16">{`${s.firstname} ${s.lastname}`}</span></td>
                  <td>{s?.language?.name}</td> 
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.hours}</td>
                  <td>{moment(s.updatedAt).format("DD/MM/YYYY")}</td>

                  {checkRole(user.role, "adminOrsuperAdmin") && <td><Link to={`/exam/${s._id}`} className="btn btn-icon btn-sm"><i className="fa fa-eye" /></Link></td>}
                 
                  {user.role !== "teacher" && <td>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(s._id , e) }}><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm" title="View" onClick={() => { ActionsPupup(s.actions) }}><i className="fa fa-eye" /></button> 
                    <button type="button" className="btn btn-icon btn-sm" title="level" onClick={() => { navigate(`/archived-students/level/${s._id}`) }}><i className="fa fa-graduation-cap" /></button>
                    <button type="button" className="btn btn-icon btn-sm" title="register" onClick={() => { navigate(`/archived-students/register/${s._id}`) }}><i className="fa fa-print" /></button>
                
                    <> {checkRole(user.role, "superAdmin") && <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(s._id) }} title="Delete"><i className="fa fa-trash-o text-danger" /></button>}</>
                  </td>}
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