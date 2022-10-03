import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

const Email = () => {

  const { t } = useTranslation();
  //  const dispatch = useDispatch()
  const { loading, error, success, smtp } = useSelector(state => state.smtp)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    host: "",
    username: "",
    port: 587,
    email: "",
    name: "",
    security: "",
    password: "",

  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }


  const ProfessorsAddValidator = yup.object().shape({
    host: yup.string().required(t("host field is required")),
    username: yup.string().required(t("username field is required")),
    port: yup.number().required(t("port field is required")).min(1, t("port field is required")),
    email: yup.string().required(t("email field is required")).email("email must be email"),
    name: yup.string().required(t("name field is required")),
    security: yup.string().required(t("security field is required")),
    password: yup.string().required(t("password field is required")),

  })

  return (
    <div className="tab-pane" id="Email_Settings">


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ProfessorsAddValidator}>

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

                        <label>{t("Email From Address")} <span className="text-danger">*</span></label>
                        <Field type="email" name="email" className="form-control" placeholder={t("Email From Address")} />
                        {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">

                        <label>{t("Email From Name")} <span className="text-danger">*</span></label>
                        <Field type="text" name="name" className="form-control" placeholder={t("name From Name")} />
                        {touched.name && errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">

                        <label>{t("SMTP HOST")} <span className="text-danger">*</span></label>
                        <Field type="text" name="host" className="form-control" placeholder={t("SMTP HOST")} />
                        {touched.host && errors.host && <small className="text-danger">{errors.host}</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">

                        <label>{t("SMTP USER")} <span className="text-danger">*</span></label>
                        <Field type="text" name="username" className="form-control" placeholder={t("SMTP USER")} />
                        {touched.username && errors.username && <small className="text-danger">{errors.username}</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>{t("SMTP PASSWORD")} <span className="text-danger">*</span></label>
                        <Field type="text" name="password" className="form-control" placeholder={t("SMTP PASSWORD")} />
                        {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>{t("SMTP PORT")}  <span className="text-danger">*</span></label>
                        <Field type="number" name="port" className="form-control" placeholder={t("SMTP PORT")} />
                        {touched.port && errors.port && <small className="text-danger">{errors.port}</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>{t("SMTP Security")} <span className="text-danger">*</span></label>
                        <Field as="select" name="security" className="form-control">
                          <option value="None">{t("None")}</option>
                          <option value="SSL">{t("SSL")}</option>
                          <option value="TLS">{t("TLS")}</option>
                        </Field>
                        {touched.security && errors.security && <small className="text-danger">{errors.security}</small>}

                      </div>
                    </div>

                    <div className="col-sm-12 m-t-20 text-right">
                      <button type="button"  disabled={(!loading && isValid)} className="btn btn-primary">{t("SAVE")}</button>
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