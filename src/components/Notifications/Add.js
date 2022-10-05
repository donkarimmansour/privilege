import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
 

const Add = () => {
  const { t } = useTranslation();
  //  const dispatch = useDispatch()
  const { loading, error, success , notifications } = useSelector(state => state.notifications)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    class : "" ,
    group : "" ,
    level : "" ,
    option : "" ,
    session : "" ,
    message : "" ,
    title : "" ,
  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }


  const ProfessorsAddValidator = yup.object().shape({
    class: yup.string().required(t("class field is required")),
    option: yup.string().required(t("option field is required")),
    session: yup.string().required(t("session field is required")),
    level: yup.number().required(t("level field is required")),
    group: yup.number().required(t("group field is required")),
    message: yup.number().required(t("message field is required")),
    title: yup.number().required(t("title field is required")),
  
  })



  return (
    <div className="tab-pane" id="notification-add">


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ProfessorsAddValidator}>

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
                          <label className="col-md-3 col-form-label">{t("Class")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="class">
                              <option value>{t("Select...")}</option>
                              <option value="all">{t("All")}</option>
                              <option value="Franch">Franch</option>
                              <option value="Germany">Germany</option>
                              <option value="English">English</option>
                            </Field>
                            {touched.class && errors.class && <small className="text-danger">{errors.class}</small>}

                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Group")} </label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="group">
                              <option value>{t("Select...")}</option>
                              <option value="all">{t("All")}</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Field>
                            {touched.group && errors.group && <small className="text-danger">{errors.group}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Level")} </label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="level">
                              <option value>{t("Select...")}</option>
                              <option value="all">{t("All")}</option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                            </Field>
                            {touched.level && errors.level && <small className="text-danger">{errors.level}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="session">
                              <option value>{t("Select...")}</option>
                              <option value="all">{t("All")}</option>
                              <option value="normale">Normale</option>
                              <option value="accelerated">Accelerated</option>
                              <option value="superAccelerated">Super Accelerated</option>
                            </Field>
                            {touched.classessions && errors.session && <small className="text-danger">{errors.session}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Option")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="option">
                              <option value>{t("Select...")}</option>
                              <option value="all">{t("All")}</option>
                              <option value="day">Day</option>
                              <option value="evening">Evening</option>
                              <option value="weekend">Weekend</option>
                            </Field>
                            {touched.option && errors.option && <small className="text-danger">{errors.option}</small>}

                          </div>
                        </div>





                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Title")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as='textarea' row="5" name="title" className="form-control" placeholder={t("Enter your Title")} />
                            {touched.title && errors.title && <small className="text-danger">{errors.title}</small>}
                          </div>
                        </div>
                      
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Message")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as='textarea' row="5" name="message" className="form-control" placeholder={t("Enter your Message")} />
                            {touched.message && errors.message && <small className="text-danger">{errors.message}</small>}
                          </div>
                        </div>
                      

                      
                         <div className="form-group row">
                            <button type="submit" className="btn btn-primary" disabled={(!loading && isValid)}>{t("Send")}</button>
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