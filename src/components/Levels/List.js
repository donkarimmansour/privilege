import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'; 
import { cleanAlerts } from '../../redux/levels/reducer';
import { checkString, loader } from '../../common/funs';
import { countLevel, deleteLevel, getLevel } from '../../redux/levels/action';
import swal from 'sweetalert';

const List = ({setEditLevelId}) => { 

  
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ name: ""});
   const { loading, error, success, levels, _count } = useSelector(state => state.level)


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
    setEditLevelId(_id)

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
        dispatch(deleteLevel(_id))
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
    

    dispatch(getLevel({filter , sort : {_id : -1} , expend : "all" }))
    dispatch(countLevel(filter))
     
  }


  return (
    <div className="tab-pane active" id="Level-all">

         {loading && loader()}

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <div className="input-group">
                <input type="text" name="name" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={("Name")} />
              </div>
            </div>

            <div className="col-sm-6">
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
              <th>{t("Groupe")}</th>
              <th>{t("Department")}</th>
              <th>{t("Position")}</th>
              <th>{t("Class")}</th>
            </tr>
          </thead>


          <tbody>


            {levels.length > 0 && levels.map((l, li) => {
              return (
                <tr key={li}>
                  <td>{li + 1}</td>
                  <td>{l.name}</td>
                  <td>{l.group.name}</td>
                  <td>{l.department.departmentName}</td>
                  <td>{l.position}</td>
                  <td>{l.group.className.name}</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(l._id , e) }}><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm js-sweetalert" onClick={() => { OnDelete(l._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
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