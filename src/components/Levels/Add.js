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
  const { loading, error, success } = useSelector(state => state.professors)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    name: "",
    group: "",
    department: "",
    position: "",
  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }


  const LevelAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    group: yup.number().required(t("group field is required")).min(1, t("group field is required")),
    department: yup.number().required(t("department field is required")).min(1, t("department field is required")),
    position: yup.number().required(t("position field is required")).min(1, t("position field is required")),
  })



  return (
    <div className="tab-pane" id="Student-add">



      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LevelAddValidator}>

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
                          <label className="col-md-3 col-form-label">{t("Department")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="department">
                              <option value>{t("Select...")}</option>
                              <option value="one">one</option>
                              <option value="two">two</option>
                              <option value="three">three</option>
                            </Field>
                            {touched.department && errors.department && <small className="text-danger">{errors.department}</small>}

                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Position")} <span className="text-danger">*</span></label>

                          <div className="col-md-9">
                            <Field type="number" name="position" className="form-control" placeholder={t("Enter your Position")} />
                            {touched.position && errors.position && <small className="text-danger">{errors.position}</small>}
                          </div>


                        </div>



                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Group")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="group">
                              <option value>{t("Select...")}</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Field>
                            {touched.group && errors.group && <small className="text-danger">{errors.group}</small>}

                          </div>
                        </div>


                    


                  

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