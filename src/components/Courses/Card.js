import react from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { ImageVIEW } from '../../common/funs';


const Card = ({course , OnEdit , OnDelete}) => {
  const { t } = useTranslation();


  return (
    <div className="card ribbon">

      <div className="ribbon-box orange"><i className="fa fa-star"></i></div>
      
      <Link to={`/courses/view/${course._id}`} ><img className="card-img-top" src={ImageVIEW(course.image)} alt="" /></Link>
    
    <div className="card-body d-flex flex-column">
        <h5><a href="courses-details.html">{course.name}</a></h5>
        <div className="text-muted">{course.description}</div>
      </div>
      <div className="table-responsive"> 
        <table className="table table-striped table-vcenter mb-0">
          <tbody>
                  <tr>
                  <td className="w20"><i className="fa fa-black-tie text-blue" /></td>
                    <td className="tx-medium">{t('Teachers')}</td>
                    <td className="text-right">{course.teachers}</td>
                  </tr>
                  <tr>
                  <td><i className="fa fa-cc-visa text-danger" /></td>
                    <td className="tx-medium">{t('Fees')}</td>
                    <td className="text-right">{course.fees}</td>
                  </tr>
                  <tr>
                  <td><i className="fa fa-users text-warning" /></td>
                    <td className="tx-medium">{t('Students')}</td>
                    <td className="text-right">{course.students}</td>
                  </tr>
          </tbody>
        </table>
      </div>

      <div className="card-footer">

        <div className="d-flex align-items-center mt-auto">
           <div>
             <a className ="ml-3" onClick={(e) => { OnEdit(course._id , e) }}><i className ="fa fa-edit mr-1"></i> </a>
          </div>

          <div className ="ml-auto text-muted">
            <a className ="ml-3" onClick={(e) => { OnDelete(course._id) }}><i className ="fa fa-trash-o text-danger mr-1"></i> </a>
          </div>

        </div>
      </div>

    </div>

  )

}

export default Card