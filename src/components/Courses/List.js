import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { checkString, loader } from '../../common/funs';
import { countCourse, deleteCourse, getCourse } from '../../redux/courses/action';
import { cleanAlerts } from '../../redux/courses/reducer';
import Card from './Card'

const List = ({setEditCourseId}) => { 

        const { t } = useTranslation();
        const dispatch = useDispatch();
        const { loading, error, success, courses, _count } = useSelector(state => state.courses)

                
        //handle initt
        useEffect(() => {
                dispatch(getCourse({sort : {_id : -1}}))
                dispatch(countCourse({}))
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
        setEditCourseId(_id)
    
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
            dispatch(deleteCourse(_id))
          }
        });
    
    
      }
    
    
      
      
      
     
        return (
                <div className="tab-pane active" id="Courses-all">

                     {loading && loader()}

                        <div className="row row-deck">
                                {courses.length > 0 && courses.map((c, ci) => {

                                        return (<div key={ci} className="col-xl-4 col-lg-4 col-md-6">
                                                 <Card course={c} OnEdit={OnEdit} OnDelete={OnDelete}/> 
                                                </div>)

                                })}

                        </div>
                </div>

        )

}

export default List