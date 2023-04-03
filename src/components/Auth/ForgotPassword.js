import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../redux/auth/action';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/auth/reducer';
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => { 
  
  const { loading, error, success, isLoggedIn } = useSelector(state => state.auth)
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
        swal(t("Updated"), t(checkString(success)) , "success");
  
      } else if (error) {
        swal(t("Not Updated"), t(checkString(error)) , "error");
      }
  
      dispatch(cleanAlerts())
      
    }, [success, error]);

    

      //formik initial
      const initialValues = {
        email: "" ,
        role: "student"
      }

    //initial yup Scheme
    const ForgotValidator = yup.object().shape({
      email: yup.string().required(t("email field is required")) ,
      role: yup.string().required(t("role field is required"))
    })


    //submit form
    const onSubmit = values => { 
      dispatch(forgotPassword({ ...values }))
    }
  



  return (
    <>
      <div className="auth option2">

      {loading && loader()}

        <div className="auth_left">

          {
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={ForgotValidator}>

              {
                ({ touched, errors, isValid }) => (

                  <Form action="#" method="post">

                    <div className="card">
                      <div className="card-body"> 
                        <div className="text-center">
                          <a className="header-brand" href="#!"><i className="fa fa-graduation-cap brand-logo" /></a>
                          <div className="card-title">{t("Forgot password")}</div>
                        </div>
                        <p className="text-muted">{t("Enter your email address or username and your password will be reset and emailed to you.")}</p>
                       
                        <div className="form-group">
                          <Field as="select" name="role" className="form-control"  placeholder={t("Select you role")} >
                            <option value="student">{t("Student")}</option>
                            <option value="teacher">{t("Teacher")}</option>
                            <option value="admin">{t("Admin")}</option>
                            </Field>

                          {touched.role && errors.role && <small className="text-danger">{errors.role}</small>}
                        </div>
                       
                        <div className="form-group">
                          <label className="form-label" htmlFor="exampleInputEmail1">{t("Enter email or Username")}</label>
                          <Field type="email" name="email" className="form-control"   placeholder={t("Enter email or Username")} />
                          {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        
                        <div className="text-center">
                          <button type="submit" disabled={(loading || !isValid)} className="btn btn-primary btn-block">{t("Send me new password")}</button>
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