import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";



const Add = () => {

  const { t } = useTranslation();
  //  const dispatch = useDispatch()
  const { loading, error, success, singleDepartment } = useSelector(state => state.departments)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    brief: "",
    headOfDepartment: "",
    departmentName: "",

  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }


  const ProfessorsAddValidator = yup.object().shape({
    departmentName: yup.string().required(t("Departmen tName field is required")),
    headOfDepartment: yup.string().required(t("Head of Department field is required")),
    // brief: yup.string().required(t("Brief field is required")),

  })


  return (
    <div className="tab-pane" id="Dep-add">

      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ProfessorsAddValidator}>

          {
            ({ touched, errors, isValid }) => (

              <Form action="#" method="post" >


                <div className="col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">{t("Department Basic Info")}</h3>
                      <div className="card-options ">
                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>{t("Department Name")} <span className="text-danger">*</span></label>
                            <Field type="text" name="departmentName" className="form-control" placeholder={t("Department Name")} />
                            {touched.departmentName && errors.departmentName && <small className="text-danger">{errors.departmentName}</small>}

                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>{t("Head of Department")} <span className="text-danger">*</span></label>
                            <Field type="text" name="headOfDepartment" className="form-control" placeholder={t("Head of Department")} />
                            {touched.headOfDepartment && errors.headOfDepartment && <small className="text-danger">{errors.headOfDepartment}</small>}

                          </div>
                        </div>


                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>{t("Brief")}</label>
                            <Field as="textarea" name="brief" rows="4" className="form-control no-resize" placeholder={t("Brief")} />
                            {touched.brief && errors.brief && <small className="text-danger">{errors.brief}</small>}                </div>
                        </div>

                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary" disabled={(!loading && isValid)}>{t("Submit")}</button>
                          <button type="submit" className="btn btn-outline-secondary btn-default">{t("Cancel")}</button>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>



              </Form>

            )

          }</Formik>
      }




    </div >

  )

}

export default Add