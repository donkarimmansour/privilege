import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/library/reducer';
import { createLibrary, editLibrary, getSingleLibrary } from '../../redux/library/action';


const Add = ({ editLibraryId , setEditLibraryId }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleLibrary } = useSelector(state => state.library)

  //get student data
  useEffect(() => {
    if (editLibraryId && editLibraryId !== "") {
      dispatch(getSingleLibrary({ filter: { _id: editLibraryId } }))
    }
  }, [editLibraryId])


 
   //update level data
   useEffect(() => {
    if (singleLibrary && singleLibrary._id) {
      setInitialValues(singleLibrary)
    }
  }, [singleLibrary])


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
    setEditLibraryId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")
  }



  //formik initial
  const [initialValues, setInitialValues] = useState({
    title: "",
    status: "",
    level: "",
    language: "",
  })



  //initial yup Scheme
 const LibraryAddValidator = yup.object().shape({
    title: yup.string().required(t("title field is required")),
    status: yup.string().required(t("status field is required")),
    level: yup.string().required(t("level field is required")),
    language: yup.string().required(t("language field is required")),
  })



  //submit form 
  const onSubmit = values => {
    if (editLibraryId && editLibraryId !== "") {//if edit  
      dispatch(editLibrary(values))
    } else {//if add
      dispatch(createLibrary(values)) 

    }
  }



  return (
    <div className="tab-pane" id="Library-add">

       {loading && loader()}

      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LibraryAddValidator}
          enableReinitialize={true}>

          {
            ({ touched, errors, isValid }) => (

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
                          <label className="col-md-3 col-form-label">{t("Title")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="title" className="form-control" placeholder={t("Title")} />
                            {touched.title && errors.title && <small className="text-danger">{errors.title}</small>}
                          </div>
                        </div>

  


                         <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Language")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="language">
                              <option value="">{t("Select...")}</option>
                              <option value="france">france</option>
                              <option value="germany">germany</option>
                              <option value="english">english</option>
                            </Field>
                            {touched.language && errors.language && <small className="text-danger">{errors.language}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Level")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="level">
                              <option value="">{t("Select...")}</option>
                              <option value="a1">a1</option>
                              <option value="a2">a2</option>
                            </Field>
                            {touched.level && errors.level && <small className="text-danger">{errors.level}</small>}

                          </div>
                        </div>
                  


            

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Status")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="status">
                              <option value="">{t("Select...")}</option>
                              <option value="Out of Stock">Out of Stock</option>
                              <option value="In Stock">In Stock</option>
                            </Field>
                            {touched.status && errors.status && <small className="text-danger">{errors.status}</small>}

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