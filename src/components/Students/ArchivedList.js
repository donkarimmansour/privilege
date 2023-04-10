import { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { countArchivedStudent, getArchivedStudent } from '../../redux/students/action';
import { ImageVIEW, loader } from '../../common/funs';
import moment from "moment"; 
import ReactPaginate from "react-paginate";
import ActionsModal from '../shared/ActionsModal';

const ArchivedList = () => { 

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ lastname: "", email: "", firstname: "" });
  const { loading, archivedStudents, archivedCount } = useSelector(state => state.students)
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [modalState, toggleModal] = useState(false)
  const [actions, setActions] = useState(false)
  const { user } = useSelector(state => state.auth)
  const limit = 20

  //handle admin Search 
  useEffect(() => {
    if (user.role !== "teacher") {
      handleSearch()
    }
  }, [dispatch, pageCurrent])


  //Actions Pupup
  const ActionsPupup = actions => {
    setActions(actions)
    toggleModal(true)
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

     const skip = (pageCurrent === 1) ? 0 : (pageCurrent - 1) * limit
     dispatch(getArchivedStudent({filter , sort : {_id : -1} , expend : "all" , skip : skip , limit : limit}))
     dispatch(countArchivedStudent(filter))
     
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
    <div className="tab-pane active" id="archived-all">
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
              {user.role !== "teacher" && <th>{t("Action")}</th>}
            </tr>
          </thead>


          <tbody> 
 

            {archivedStudents.length > 0 && archivedStudents.map((s, si) => {
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
                  {user.role !== "teacher" && <td> <button type="button" className="btn btn-icon btn-sm" title="View" onClick={() => { ActionsPupup(s.actions) }}><i className="fa fa-eye" /></button> </td> }
                
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

export default ArchivedList