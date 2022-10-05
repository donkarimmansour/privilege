import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {


  const { t } = useTranslation();
  // const dispatch = useDispatch()
  const { loading, error, success, profile } = useSelector(state => state.user)

  useEffect(() => {
    if (success) { } else if (error) { }
  }, [success, error]);


  const initialValues = {
    email: "",
  }

  const onSubmit = values => { // dispatch(set_contact())
    console.log(values);
  }


  const forgotValidator = yup.object().shape({
    email: yup.string().required(t("email field is required")).email("email must be email")
  })



  return (
    <>
      <div className="auth option2">


        <div className="auth_left">

          {
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={forgotValidator}>

              {
                ({ touched, errors, isValid }) => (

                  <Form action="#" method="post">

                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo" /></a>
                          <div className="card-title">{t("Forgot password")}</div>
                        </div>
                        <p className="text-muted">{t("Enter your email address or username and your password will be reset and emailed to you.")}</p>
                        <div className="form-group">
                          <label className="form-label" htmlFor="exampleInputEmail1">{t("Enter email or Username")}</label>
                          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("Enter email or Username")} />
                          {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">{t("Send me new password")}</button>
                          <div className="text-muted mt-4">{t("Forget it,")} <Link to="/login">{t("Send me Back")}</Link> {t("to the Sign in screen.")}</div>
                        </div>
                      </div>
                    </div>


                  </Form>

                )

              }</Formik>
          }

        </div>
      </div>
    </>
  )

}

export default ForgotPassword