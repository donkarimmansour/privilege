import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { checkString, loader } from '../../common/funs';
import { editSmtp, getSmtp } from '../../redux/smtp/action';
import { cleanAlerts } from '../../redux/smtp/reducer';
import swal from 'sweetalert';

const Email = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, smtp } = useSelector(state => state.smtp)

  //get payment data
  useEffect(() => {
      dispatch(getSmtp())
  }, [dispatch])

  
  //update smtp data
  useEffect(() => {
    if (smtp && smtp._id) {
      setInitialValues(smtp)
    }
  }, [smtp])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

     dispatch(cleanAlerts())

  }, [success, error]);


  //formik initial
  const [initialValues, setInitialValues] = useState({
    host: "",
    username: "",
    port: 587,
    email: "",
    name: "",
    security: "",
    password: "",
  })



  //initial yup Scheme
  const SmtpValidator = yup.object().shape({
    host: yup.string().required(t("host field is required")),
    username: yup.string().required(t("username field is required")),
    port: yup.number().required(t("port field is required")).min(1, t("port field is required")),
    email: yup.string().required(t("email field is required")).email("email must be email"),
    name: yup.string().required(t("name field is required")),
    security: yup.string().required(t("security field is required")),
    password: yup.string().required(t("password field is required")),
  })

  //submit form
  const onSubmit = values => {
      dispatch(editSmtp(values))
  }

  return (
    <div className="tab-pane active" id="email_settings">
       {loading && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SmtpValidator}
          enableReinitialize={true}>

          {
            ({ touched, errors, isValid }) => (
              <Form action="#" method="post">

                <div className="card">

                  <div className="card-header">
                    <h3 className="card-title">{t("SMTP Email Settings")}</h3>
                  </div>


                  <div className="card-body">
                    <div className="row">


                     <div className="col-sm-6">
                      <div className="form-group">
                        <label>{t("Email From Address")} <span className="text-danger">*</span></label>
                        <Field type="email" name="email" className="form-control" placeholder={t("Email From Address")} />
                        {touched.email && errors.email && <small className="text-danger">{t(errors.email)}</small>}
                      </div>
                     </div>

                    <div className="col-sm-6">
                      <div className="form-group">

                        <label>{t("Email From Name")} <span className="text-danger">*</span></label>
                        <Field type="text" name="name" className="form-control" placeholder={t("name From Name")} />
                        {touched.name && errors.name && <small className="text-danger">{t(errors.name)}</small>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">

                        <label>{t("SMTP HOST")} <span className="text-danger">*</span></label>
                        <Field type="text" name="host" className="form-control" placeholder={t("SMTP HOST")} />
                        {touched.host && errors.host && <small className="text-danger">{t(errors.host)}</small>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">

                        <label>{t("SMTP USER")} <span className="text-danger">*</span></label>
                        <Field type="text" name="username" className="form-control" placeholder={t("SMTP USER")} />
                        {touched.username && errors.username && <small className="text-danger">{t(errors.username)}</small>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>{t("SMTP PASSWORD")} <span className="text-danger">*</span></label>
                        <Field type="text" name="password" className="form-control" placeholder={t("SMTP PASSWORD")} />
                        {touched.password && errors.password && <small className="text-danger">{t(errors.password)}</small>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>{t("SMTP PORT")}  <span className="text-danger">*</span></label>
                        <Field type="number" name="port" className="form-control" placeholder={t("SMTP PORT")} />
                        {touched.port && errors.port && <small className="text-danger">{t(errors.port)}</small>}
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>{t("SMTP Security")} <span className="text-danger">*</span></label>
                        <Field as="select" name="security" className="form-control">
                          <option value="None">{t("None")}</option>
                          <option value="SSL">{t("SSL")}</option>
                          <option value="TLS">{t("TLS")}</option>
                        </Field>
                        {touched.security && errors.security && <small className="text-danger">{t(errors.security)}</small>}

                      </div>
                    </div>

                    <div className="col-sm-12 m-t-20 text-right">
                      <button type="submit" disabled={(loading || !isValid)} className="btn btn-primary">{t("SAVE")}</button>
                    </div>

                  </div>
                </div>


                </div>


              </Form>

            )

          }</Formik>
      }
    </div>
  )

}

export default Email