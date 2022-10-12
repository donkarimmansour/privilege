import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { countStudent, deleteStudent, getStudent } from '../../redux/students/action';
import swal from 'sweetalert';
import { checkString, loader } from '../../common/funs';
import { cleanAlerts } from '../../redux/students/reducer';

const List = ({setEditStudentId}) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ name: "", phone: "", email: "", class: "" });
  const { loading, error, success, students, count } = useSelector(state => state.students)


  //handle Search
  useEffect(() => {
    handleSearch()
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
    setEditStudentId(_id)

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[1].classList.add("active")
     
  }

  //delete student
  const OnDelete = (_id) => {

    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
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
       filter = { name : { $ne : "xxxlxxxx"}  } 
     } 
    

    dispatch(getStudent({filter , sort : {_id : -1}}))
    dispatch(countStudent(filter))
     
  }


  return (
    <div className="tab-pane active" id="Student-all">

       {loading && loader()}


      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="input-group">
                <input type="text" name="name" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={("Name")} />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="input-group">
                <input type="text" name="class" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("class")} />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="input-group">
                <input type="text" name="phone" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Phone")} />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="input-group">
              <input type="text" name="email" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Emall")} />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <a href="javascript:void(0);" onClick={handleSearch} className="btn btn-sm btn-primary btn-block" >{("Search")}</a>
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
              <th>{t("class")}</th>
              <th>{t("Email")}</th>
              <th>{t("Phone")}</th>
              <th>{t("Date")}</th>
              <th>{t("Action")}</th>
            </tr>
          </thead>


          <tbody>


            {students.length > 0 && students.map((s, si) => {
              return (
                <tr key={si}>
                  <td>{si + 1}</td>
                  <td className="w60">
                    <img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                  </td>
                  <td><span className="font-16">{`${s.firstname} ${s.lastname}`}</span></td>
                  <td>{s.className}</td>
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.createdAtt}</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(s._id , e) }}><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete(s._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                  </td>
                </tr>
              )
            })}


          </tbody>
        </table>
      </div>
    </div>


  )

}

export default List