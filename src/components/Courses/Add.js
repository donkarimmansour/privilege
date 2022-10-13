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
  const { loading, error, success } = useSelector(state => state.courses)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    name: "",
    description: "",
  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }


  const ProfessorsAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    description: yup.string().required(t("description field is required")),   
  })



  return (
    <div className="tab-pane" id="Courses-add">

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
                            <input type="file" className="dropify" />
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