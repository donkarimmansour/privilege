import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { countGroupe, deleteGroupe, getGroupe } from '../../redux/groupes/action';

const List = ({setEditGroupeId}) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({ name: "" });
  const { loading, error, success, groupes, _count } = useSelector(state => state.groupe)


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

   // dispatch(cleanAlerts())

  }, [success, error]);




  //send to edit section
  const OnEdit = (_id , evt) => {
    setEditGroupeId(_id)

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
        dispatch(deleteGroupe(_id))
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
    

    dispatch(getGroupe({filter , sort : {_id : -1}, expend : "all"}))
    dispatch(countGroupe(filter))
     
  }


  return (
    <div className="tab-pane active" id="Groupe-all">

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
              <th>{t("Class")}</th>
              <th>{t("Action")}</th>
            </tr>
          </thead>


          <tbody>


            {groupes.length > 0 && groupes.map((g, gi) => {
              return (
                <tr key={gi}>
                  <td>{gi + 1}</td> 
                 
                  <td>{g.name}</td>
                  <td>{g.className.name}</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={(e) => { OnEdit(g._id , e) }}><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm js-sweetalert" onClick={() => { OnDelete(g._id) }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
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