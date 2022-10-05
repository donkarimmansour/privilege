import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';




const Login = () => {

  const { t } = useTranslation();

  // const dispatch = useDispatch()
  const { loading, error, success, profile } = useSelector(state => state.user)

  useEffect(() => {
    if (success) { } else if (error) { }
  }, [success, error]);


  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: ""
  }

  const onSubmit = values => { // dispatch(set_contact())
    console.log(values);
  }


  const LoginValidator = yup.object().shape({
    firstname: yup.string().required(t("firstname field is required")),
    lastname: yup.string().required(t("lastname field is required")),
    phone: yup.string().required(t("phone field is required")),
    // password: yup.string().required(t("password field is required")),
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
              validationSchema={LoginValidator}>

              {
                ({ touched, errors, isValid }) => (

                  <Form action="#" method="post">

                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo" /></a>
                          <div className="card-title mt-3">{t("Login to your account")}</div>
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("Enter email or Username")} />
                          {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}

                        </div>
                        <div className="form-group">
                          <label className="form-label"><Link to="/forgotpassword" className="float-right small">{t("I forgot password")}</Link></label>
                          <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder={t("Password")} />
                          {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}

                        </div>
                        <div className="text-center">
                          <a href="index.html" className="btn btn-primary btn-block" >{t("Sign in")}</a>
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

export default Login