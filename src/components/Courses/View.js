import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourse } from '../../redux/courses/action';
import { checkString, ImageVIEW, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/courses/reducer';
import Container from '../shared/Container'
import { useParams } from 'react-router';

const View = () => {

  const links = [
    { name: "Ericsson", url: "#" },
    { name: "Courses", url: "#" },
    { name: "Details", url: "#" }
  ]

  const tabs = []

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const params = useParams()
  const { loading, error, success, singleCourse } = useSelector(state => state.courses)

  //get course data
  useEffect(() => {
    if (params && params.id && params.id !== "") {
      dispatch(getSingleCourse({ filter: { _id: params.id } }))
    }
  }, [params])

  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

    dispatch(cleanAlerts())

  }, [success, error]);


  return (
    <Container tabs={tabs} links={links}>

      {loading && loader()}


      <div className="row">
        {singleCourse && singleCourse._id &&
          <>

            <div className="col-xl-4 col-lg-5 col-md-12">

              <div className="card">
                <a href="#"><img className="card-img-top" src={ImageVIEW(singleCourse.image)} alt="" /></a>
                <div className="card-body d-flex flex-column">
                  <h5><a href="#">{singleCourse.name}</a></h5>
                  <div className="text-muted">{singleCourse.description}</div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-vcenter mb-0">
                    <tbody>
                      <tr>
                        <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                        <td className="tx-medium">{t('Date')}</td>
                        <td className="text-right">{singleCourse.createdAtt}</td>
                      </tr>
                      <tr>
                        <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                        <td className="tx-medium">{t('Teachers')}</td>
                        <td className="text-right">{singleCourse.teachers}</td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-cc-visa text-danger" /></td>
                        <td className="tx-medium">{t('Fees')}</td>
                        <td className="text-right">{singleCourse.fees}</td>
                      </tr>
                      <tr>
                        <td><i className="fa fa-users text-warning" /></td>
                        <td className="tx-medium">{t('Students')}</td>
                        <td className="text-right">{singleCourse.students}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="card">
                <div className="card-body">
                  <p>{singleCourse.description}</p>
                  <h5 className="mt-4">{("Details")}</h5>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">mm. <span className="badge badge-primary badge-pill">111</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">tt. <span className="badge badge-primary badge-pill">111</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">pp. <span className="badge badge-primary badge-pill">111</span></li>
                  </ul>
                </div>
              </div>
            </div>

          </>

        }

      </div>


    </Container>
  )

}

export default View