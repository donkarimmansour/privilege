import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkString, ImageVIEW, loader } from '../../common/funs';
import { getProfessor } from '../../redux/professors/action';
import { countStudent } from '../../redux/students/action';
import { cleanAlerts } from '../../redux/professors/reducer';

const ListGrid = ({setEditProfessorId}) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { loading, error, success, professors, _count } = useSelector(state => state.professors)
  
  
    //handle initt
    useEffect(() => {
        dispatch(getProfessor({sort : {_id : -1}}))
        dispatch(countStudent({}))
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
        setEditProfessorId(_id)
  
      evt.target.closest(".tab-pane").classList.remove("active")
      evt.target.closest(".tab-content").children[1].classList.add("active")
       
    }
  
  

    return (
        <div className="tab-pane" id="pro-grid">

               {loading && loader()}

                        <div className="row">

                            {professors.length > 0 && professors.map((p , pi) => {
                                return (
                                    <div key={pi} className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <img className="card-profile-img" src={ImageVIEW(p.image)} alt=""/>
                                            <h5 className="mb-0">{`${p.firstname} ${p.lastname}`}</h5>
                                            <span>{p.gender}</span>
                                            <div className="text-muted">{p.phone}</div>
                                            <p className="mb-4 mt-3">{p.email}</p>
                                            <button className="btn btn-primary btn-sm" onClick={(e) => { OnEdit(p._id , e) }}>{t("Read More")}</button>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                           
                        </div>
                    </div>
                  
     
        )

}

export default ListGrid