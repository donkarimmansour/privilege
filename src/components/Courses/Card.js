import react from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


const Card = ({course}) => {
  const { t } = useTranslation();


  return (
    <div className="card ribbon">

      <div class="ribbon-box orange"><i class="fa fa-star"></i></div>
      <Link to="/courses/view"><img className="card-img-top" src="../assets/images/gallery/6.jpg" alt="" /></Link>
      <div className="card-body d-flex flex-column">
        <h5><a href="courses-details.html">{course.name}</a></h5>
        <div className="text-muted">{course.desk}</div>
      </div>
      <div className="table-responsive"> 
        <table className="table table-striped table-vcenter mb-0">
          <tbody>
                  <tr>
                  <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                    <td className="tx-medium">{t('Duration')}</td>
                    <td className="text-right">{course.duration}</td>
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
      
    </div>

  )

}

export default Card