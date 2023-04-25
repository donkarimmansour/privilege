import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { signinUser } from '../../../redux/auth/action';
import { checkString, loader } from '../../../common/funs';
import { cleanAlerts } from '../../../redux/auth/reducer';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'


const Login = () => {


  const { loading, error, success, isLoggedIn, user } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {

    if(isLoggedIn){

        navigate("/")
      
    }
  } , [isLoggedIn])

  const { t } = useTranslation();
  const dispatch = useDispatch()


    //alerts
    useEffect(() => {
      if (success) { 
       // swal(t("Added"), t(checkString(success)) , "success");
       navigate("/")
  
      } else if (error) {
        swal(t("Error"), t(checkString(error)) , "error");
      }
  
      dispatch(cleanAlerts())
      
    }, [success, error]);

    

      //formik initial
      const initialValues = {
        email: "",
        password: "" ,
        role: "student"
      }

    //initial yup Scheme
    const LoginValidator = yup.object().shape({
      email: yup.string().required(t("email field is required")) ,
      password: yup.string().required(t("password field is required")) ,
      role: yup.string().required(t("role field is required"))
    })


    //submit form
    const onSubmit = values => { 
      dispatch(signinUser({ ...values }))
    }
  

  return (
    <>
      <div className="auth option2">

        <div className="auth_left">

        {loading && loader()}


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
                          <a className="header-brand" href="#!"><i className="fa fa-graduation-cap brand-logo" /></a>
                          <div className="card-title mt-3">{t("Login to your account")}</div>
                        </div>
                        <p className="text-muted">{t("Enter your email address or username and your password.")}</p>

                        <div className="form-group">
                          <Field as="select" name="role" className="form-control"  placeholder={t("Select you role")} >
                            <option value="student">{t("Student")}</option>
                            <option value="teacher">{t("Teacher")}</option>
                            {/* <option value="admin">{t("Admin")}</option> */}
                           </Field>
                           
                          {touched.role && errors.role && <small className="text-danger">{errors.role}</small>}
                        </div>

                        <div className="form-group">
                          <Field type="text" name="email" className="form-control"  placeholder={t("Enter email or Username")} />
                          {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        <div className="form-group">
                          <label className="form-label"><Link to="/forgotpassword" className="float-right">{t("I forgot password")}</Link></label>
                          <Field type="password" name="password" className="form-control"  placeholder={t("Password")} />
                          {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}

                        </div>
                        <div className="text-center">
                          <button disabled={(loading || !isValid)} className="btn btn-primary btn-block" >{t("Sign in")}</button>
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