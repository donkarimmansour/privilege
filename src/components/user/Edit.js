import {useEffect} from 'react'
import {useTranslation} from 'react-i18next';
import {Field, Formik, Form} from "formik"
import * as yup from 'yup'
import {useDispatch, useSelector} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";


const Edit = () => {

    const {t} = useTranslation();
    // const dispatch = useDispatch()
    const {loading, error, success, profile} = useSelector(state => state.user)

    useEffect(() => {
        if (success) {} else if (error) {}
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


    const ProfileEditValidator = yup.object().shape({
        firstname: yup.string().required(t("firstname field is required")),
        lastname: yup.string().required(t("lastname field is required")),
        phone: yup.string().required(t("phone field is required")),
        // password: yup.string().required(t("password field is required")),
        email: yup.string().required(t("email field is required")).email("email must be email")
    })


    return (<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


        {
        <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={ProfileEditValidator}>
        
                  {
                    ({ touched, errors, isValid }) => (
        
                      <Form action="#" method="post">
               
               
                <div className="card">
        
                   <div className="card-header">
                    <h3 className="card-title">{t("Edit Profile")}</h3>
                   </div>
        
                  <div className="card-body form-horizontal">
                
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">{t("First Name")} <span className="text-danger">*</span></label>
                      <div className="col-md-7">
                         <Field type="text" name="firstname" className="form-control" placeholder={t("First Name")} />
                        {touched.firstname && errors.firstname && <small className="text-danger">{errors.firstname}</small>}
                      </div>
                    </div>
        
        
        
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">{t("Last Name")} <span className="text-danger">*</span></label>
                      <div className="col-md-7">
                         <Field type="text" name="lastname" className="form-control" placeholder={t("Last Name")} />
                        {touched.lastname && errors.lastname && <small className="text-danger">{errors.lastname}</small>}
                      </div>
                    </div>
  
        
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">{t("Email")} <span className="text-danger">*</span></label>
                      <div className="col-md-7">
                         <Field type="email" name="email" className="form-control" placeholder={t("Email")} />
                        {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                    </div>
        
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">{t("Phone")} <span className="text-danger">*</span></label>
                      <div className="col-md-7">
                         <Field type="text" name="phone" className="form-control" placeholder={t("Phone")} />
                        {touched.phone && errors.phone && <small className="text-danger">{errors.phone}</small>}
                      </div>
                    </div>
        
        
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">{t("Password")} <span className="text-danger">*</span></label>
                      <div className="col-md-7">
                         <Field type="text" name="password" className="form-control" placeholder={t("Password")} />
                        {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>
                    </div>
        
        
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Profile Picture")}</label>
                        <div className="col-md-7">
                          <input type="file" className="dropify" />
                          <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                        </div>
                    </div>
        
                  </div>
                  
                  <div className="card-footer text-right">
                    <button disabled={(!loading && isValid)} type="submit" className="btn btn-primary">{t("Update Profile")}</button>
                  </div>
        
                </div>
        
        
                </Form>
        
                )
        
              }</Formik>
          }
        
              </div>

        )

    }

    export default Edit
