import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { getSingleLanguage } from '../../redux/languages/action';
import { checkRole, checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/languages/reducer';
import Container from '../shared/Container'
import { Navigate, useParams } from 'react-router';
import moment from 'moment';

const View = () => {

  const links = [
    { name: "Ericsson", url: "#" },
    { name: "Languages", url: "#" },
    { name: "Details", url: "#" }
  ]

  const tabs = []

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const params = useParams()
  const { loading, error, success, singleLanguage } = useSelector(state => state.languages)
  const { user, isLoggedIn } = useSelector(state => state.auth)

  //get Language data
  useEffect(() => {
    if (isLoggedIn && params && params.id && params.id !== "") {
      dispatch(getSingleLanguage({ filter: { _id: params.id } }))
    }
  }, [params, isLoggedIn])

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

    <>
      {!isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?


        <Container tabs={tabs} links={links}>

          {loading && loader()}


          <div className="row">
            {singleLanguage && singleLanguage._id &&
              <>

                <div className="col-xl-4 col-lg-5 col-md-12">

                  <div className="card">


                    <div className="card-body d-flex flex-column">
                      <h5><a href="#">{singleLanguage.name}</a></h5>
                      <div className="text-muted">{singleLanguage.description}</div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-striped table-vcenter mb-0">
                        <tbody>
                          <tr>
                            <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                            <td className="tx-medium">{t('Date')}</td>
                            <td className="text-right">{moment(singleLanguage.updatedAt).format("DD/MM/YYYY")}</td>
                          </tr>
                          <tr>
                            <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                            <td className="tx-medium">{t('Teachers')}</td>
                            <td className="text-right">{singleLanguage.teachersCount}</td>
                          </tr>
                          {/* <tr>
                        <td><i className="fa fa-cc-visa text-danger" /></td>
                        <td className="tx-medium">{t('Fees')}</td>
                        <td className="text-right">{singleLanguage.fees}</td>
                      </tr> */}
                          <tr>
                            <td><i className="fa fa-users text-warning" /></td>
                            <td className="tx-medium">{t('Students')}</td>
                            <td className="text-right">{singleLanguage.studentsCount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <p>{singleLanguage.description}</p>
                      <h5 className="mt-4">{t("Details")}</h5>

                      {singleLanguage?.session?.length > 0 &&

                        singleLanguage.session.map((s, si) => (
                          <ul className="list-group mt-3" key={si}>

                            <li className="list-group-item d-flex justify-content-between align-items-center">{t("Hours")} <span className="badge badge-primary badge-pill">{s?.hours}</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">{t("Normale")} <span className="badge badge-primary badge-pill">{s?.normale}</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">{t("Accelerated")} <span className="badge badge-primary badge-pill">{s?.accelerated}</span></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">{t("Super Accelerated")} <span className="badge badge-primary badge-pill">{s?.superAccelerated}</span></li>
                          </ul>
                        ))

                      }

                    </div>
                  </div>
                </div>

              </>

            }

          </div>


        </Container>

        : <Navigate to="/profile" />}
    </>
  )

}

export default View