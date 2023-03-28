import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { checkString, loader } from '../../common/funs';
import { cleanAlerts } from '../../redux/auth/reducer';
import { editStudentImage } from '../../redux/students/action';
import { CreateSingleFile } from '../../api/file';
import { editTeacherImage } from '../../redux/teachers/action';
import { editAdminImage } from '../../redux/admin/action';
import { editProfile } from '../../redux/auth/action';


const Edit = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, user } = useSelector(state => state.auth)
  const { token } = useSelector(state => state.auth)
  const [Lloading, setLLoading] = useState(false)



  //alerts
  useEffect(() => {
    setInitialValues(user)
  }, [user]);


  //alerts
  useEffect(() => {

    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

    dispatch(cleanAlerts())

  }, [success, error]);




  //initial yup Scheme
  const ProfileEditValidator = yup.object().shape({
    firstname: yup.string().required(t("firstname field is required")),
    lastname: yup.string().required(t("lastname field is required")),
    phone: yup.string().required(t("phone field is required")),
    // password: yup.string().required(t("password field is required")),
    email: yup.string().required(t("email field is required")).email("email must be email")
  })


  //formik initial
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "" ,
    facebook: "" ,
    twitter: "" ,
    linkedin: "" ,
    website: "" ,
  })

  //submit form
  const onSubmit = values => {
      dispatch(editProfile({...values , type : user.role}))
  }


    //upload image
    const uploadImage = (e) => {

      if (e.target.files && e.target.files[0]) { 
        const img = e.target.files[0];
  
  
        const formData = new FormData();
        formData.append('image', img);
  
        setLLoading(true)
  
        const authorization = { "Authorization": `bearer ${token}` }
  
        CreateSingleFile(formData , authorization).then(({ data }) => { //add token here
          setLLoading(false)  


          if (user.role === "student") {
            dispatch(editStudentImage({ image: data.msg , type : "profile" }))
          } else if (user.role === "teacher") {
            dispatch(editTeacherImage({ image: data.msg , type : "profile" }))
          } else if (user.role === "admin") {
            dispatch(editAdminImage({ image: data.msg , type : "profile" }))
          }

  
        }).catch(err => {
          console.log("api err ", err.response.data);
          swal(t("Not Updated"), typeof err.response.data.msg == "string" ? t(err.response.data.msg) : t(err.response.data.msg[0]), "error");
          setLLoading(false)
        })
  
  
      }
    }

 // http://localhost:3005/v1/api/file/get-single-file/6346f07516be53eb99fb37e9/view

  return (<div className="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


       {(loading || Lloading) && loader()}

    {
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ProfileEditValidator}
        enableReinitialize={true}>

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
                    <label className="col-md-3 col-form-label">{t("Password")} </label>
                    <div className="col-md-7">
                      <Field type="text" name="password" className="form-control" placeholder={t("Password")} />
                      {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Facebook")}</label>
                    <div className="col-md-7">
                    <Field type="text" name="facebook" className="form-control" placeholder={t("Facebook")} />
                    {touched.facebook && errors.facebook && <small className="text-danger">{errors.facebook}</small>}
                  </div>
                  </div>


                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Twitter")}</label>
                    <div className="col-md-7">
                    <Field type="text" name="twitter" className="form-control" placeholder={t("Twitter")} />
                    {touched.twitter && errors.twitter && <small className="text-danger">{errors.twitter}</small>}
                  </div>
                  </div>

                  {user && user.role === "teacher" &&
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label">{t("Website")}</label>
                      <div className="col-md-7">
                        <Field type="text" name="website" className="form-control" placeholder={t("Website")} />
                        {touched.website && errors.website && <small className="text-danger">{errors.website}</small>}
                      </div>
                    </div>
                  }

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Linkedin")}</label>
                    <div className="col-md-7">
                    <Field type="text" name="linkedin" className="form-control" placeholder={t("Linkedin")} />
                    {touched.linkedin && errors.linkedin && <small className="text-danger">{errors.linkedin}</small>}
                  </div>
                  </div>



                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Profile Picture")}</label>
                    <div className="col-md-7">
                      <input type="file" className="dropify" onChange={(e) => { uploadImage(e) }}/>
                    </div>
                  </div>

                </div>

                <div className="card-footer text-right">
                  <button disabled={(loading || !isValid)} type="submit" className="btn btn-primary">{t("Update Profile")}</button>
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
