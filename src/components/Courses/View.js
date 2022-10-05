import react from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Container from '../shared/Container'



const View = () => {

  const links = [
    {name : "Ericsson" , url : "#"} ,
    {name : "Courses" , url : "#"}  ,
    {name : "Details" , url : "#"} 
  ]

const tabs = []




const { t } = useTranslation();
// const [filters, setFilters] = useState({ name: "", phone: "", date: "", class: "" });
const { loading, error, success, singleCourse } = useSelector(state => state.courses)

const Course =  {
                name: "germeny",
                desk: "germeny b1 ..............",
                teachers: "6 monthes",
                fees: "$17k",
                students: "423",
                createdAtt: "12/8/2022",

        }



    return (
      <Container tabs={tabs} links={links}> 
      
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-12">

          <div className="card">
            <a href="#"><img className="card-img-top" src="../assets/images/gallery/1.jpg" alt="" /></a>
            <div className="card-body d-flex flex-column">
              <h5><a href="#">{Course.name}</a></h5>
              <div className="text-muted">{Course.desk}</div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-vcenter mb-0">
                <tbody>
                  <tr>
                    <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                    <td className="tx-medium">{t('Date')}</td>
                    <td className="text-right">{Course.createdAtt}</td>
                  </tr>
                  <tr>
                    <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                    <td className="tx-medium">{t('Teachers')}</td>
                    <td className="text-right">{Course.teachers}</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-cc-visa text-danger" /></td>
                    <td className="tx-medium">{t('Fees')}</td>
                    <td className="text-right">{Course.fees}</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-users text-warning" /></td>
                    <td className="tx-medium">{t('Students')}</td>
                    <td className="text-right">{Course.students}</td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-12">
          <div className="card">
            <div className="card-body">
              <p>{Course.desk}</p>
              <h5 className="mt-4">{("Details")}</h5>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">mm. <span className="badge badge-primary badge-pill">111</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">tt. <span className="badge badge-primary badge-pill">111</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">pp. <span className="badge badge-primary badge-pill">111</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      </Container>
    )

}

export default View