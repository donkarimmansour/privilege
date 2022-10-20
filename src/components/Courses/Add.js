import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { createCourse, editCourse, editCourseImage, getSingleCourse } from '../../redux/courses/action';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/courses/reducer'; 
import { CreateSingleFile } from '../../api/file';

 
const Add = ({ editCourseId , setEditCourseId}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success , singleCourse} = useSelector(state => state.courses)
  const { token } = useSelector(state => state.auth)
  const [Lloading, setLLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)

  //get course data
  useEffect(() => {
    if (editCourseId && editCourseId !== "") {
      dispatch(getSingleCourse({ filter: { _id: editCourseId } }))
    }
  }, [editCourseId])

  //update course data
  useEffect(() => {
    if (singleCourse && singleCourse._id) {
      setInitialValues(singleCourse)
      setProfileImage(singleCourse.image)
    }
  }, [singleCourse])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

     dispatch(cleanAlerts())

  }, [success, error]);

   //back to list
   const OnCancel = (evt) => {
    setEditCourseId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")
  }


  //formik initial
  const [initialValues, setInitialValues] = useState({
       name: "",
    description: "",  
  })



  //initial yup Scheme
  const CourseAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    description: yup.string().required(t("description field is required")), 
  })


   //submit form
   const onSubmit = values => {

    if (editCourseId && editCourseId !== "") {//if edit  
      dispatch(editCourse({ ...values, image: profileImage }))

    } else {//if add
      if (!profileImage) {
        dispatch(createCourse({ ...values }))
      } else {
        dispatch(createCourse({ ...values, image: profileImage }))
      }
    }
 
     
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
          
        setProfileImage(data.msg)

        if (!editCourseId || editCourseId === "") {
          swal(t("Uploaded"), t("Uploaded"), "success");
        } else {
          dispatch(editCourseImage({ image: data.msg}))
        }


      }).catch(err => {
        console.log("api err ", err.response.data);
        swal(t("Not Updated"), t(checkString(err.response.data.msg)) , "error");
        setLLoading(false)
      })


    }
  }



 
  return (
    <div className="tab-pane" id="Courses-add">

      {(loading || Lloading) && loader()}

      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={CourseAddValidator}
          enableReinitialize={true}>

          {
            ({ touched, errors, setFieldValue, setFieldTouched, values, isValid }) => (

              <Form action="#" method="post">

                <div className="row clearfix">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">{t("Basic Information")}</h3>
                        <div className="card-options ">
                          <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                          <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                        </div>
                      </div>
                      <div className="card-body">

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Name")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="name" className="form-control" placeholder={t("Enter your Name")} />
                            {touched.name && errors.name && <small className="text-danger">{errors.name}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Description")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="textarea" type="text" rows="4" name="description" className="form-control" placeholder={t("Enter your Description")} />
                            {touched.description && errors.description && <small className="text-danger">{errors.description}</small>}
                          </div>
                        </div>


              
               
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Image")}</label>
                          <div className="col-md-9">
                            <input type="file" className="dropify" onChange={(e) => { uploadImage(e) }}/>
                          </div>
                        </div>

                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary" disabled={(loading || !isValid)}>{t("Submit")}</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={(e) => {OnCancel(e)}}>{t("Cancel")}</button>
                          </div>


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

export default Add 