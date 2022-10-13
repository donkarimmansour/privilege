import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Add = () => {
  const { t } = useTranslation();
  //  const dispatch = useDispatch()
  const { loading, error, success } = useSelector(state => state.library)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    title: "",
    status: "",
    level: "",
    language: "",
  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }

 
  const ProfessorsAddValidator = yup.object().shape({
    title: yup.string().required(t("title field is required")),
    status: yup.string().required(t("status field is required")),
    level: yup.string().required(t("level field is required")),
    language: yup.string().required(t("language field is required")),
  })



  return (
    <div className="tab-pane" id="Library-add">


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ProfessorsAddValidator}>

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

                        {/* <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Subject")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="subject" className="form-control" placeholder={t("Enter your Last Name")} />
                            {touched.subject && errors.subject && <small className="text-danger">{errors.subject}</small>}
                          </div>
                        </div> */}


                         <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Language")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="language">
                              <option value>{t("Select...")}</option>
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
                              <option value>{t("Select...")}</option>
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
                              <option value>{t("Select...")}</option>
                              <option value="Out of Stock">Out of Stock</option>
                              <option value="In Stock">In Stock</option>
                            </Field>
                            {touched.status && errors.status && <small className="text-danger">{errors.status}</small>}

                          </div>
                        </div>

                        {/* <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Type")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="type">
                              <option value>{t("Select...")}</option>
                              <option value="CD">CD</option>
                              <option value="DVD">DVD</option>
                              <option value="Newspaper">Newspaper</option>
                              <option value="Book">Book</option>
                            </Field>
                            {touched.type && errors.type && <small className="text-danger">{errors.type}</small>}

                          </div>
                        </div> */}


                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary" disabled={(!loading && isValid)}>{t("Submit")}</button>
                            <button type="submit" className="btn btn-outline-secondary">{t("Cancel")}</button>
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