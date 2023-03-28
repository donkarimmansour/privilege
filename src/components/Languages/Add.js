import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { createLanguage, editLanguage, getSingleLanguage } from '../../redux/languages/action';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/languages/reducer'; 

 
const Add = ({ editLanguageId , setEditLanguageId}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success , singleLanguage} = useSelector(state => state.languages)
  const { user } = useSelector(state => state.auth)

  //get Language data
  useEffect(() => {
    if (editLanguageId && editLanguageId !== "") {
      dispatch(getSingleLanguage({ filter: { _id: editLanguageId } }))
    }
  }, [editLanguageId])

  //update Language data
  useEffect(() => {
    if (singleLanguage && singleLanguage._id) {
      setInitialValues(singleLanguage)
    }
  }, [singleLanguage])


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
    setEditLanguageId("")

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")

  }


  //formik initial
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",  
    session: yup.object({
      normale: 0,
      accelerated: 0,
      superAccelerated: 0,
    }),
  })



  //initial yup Scheme
  const LanguageAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    description: yup.string().required(t("description field is required")),
    session: yup.object({
      normale: yup.number().required(`session field is required`),
      accelerated: yup.number().required(`session field is required`),
      superAccelerated: yup.number().required(`session field is required`),
    }),
  })


  //submit form
  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editLanguageId && editLanguageId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }

    const { normale, accelerated, superAccelerated } = values.session
    const session = { normale, accelerated, superAccelerated }

    if (editLanguageId && editLanguageId !== "") {//if edit  
      dispatch(editLanguage({ ...values, session, actions }))

    } else {//if add
      dispatch(createLanguage({ ...values, session, actions }))
    }

  }



 
  return (
    <div className="tab-pane" id="languages-add">

      {loading && loader()}

      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LanguageAddValidator}
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
                          <label className="col-md-3 col-form-label">{t("Name")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="name" className="form-control" placeholder={t("Name")} />
                            {touched.name && errors.name && <small className="text-danger">{errors.name}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Description")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="textarea" type="text" rows="4" name="description" className="form-control" placeholder={t("Description")} />
                            {touched.description && errors.description && <small className="text-danger">{errors.description}</small>}
                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>

                          <div className="col-md-3 mt-1">
                            <Field type="number" name="session.normale" className="form-control" placeholder={t("Normale")} />
                            {touched?.session?.normale && errors?.session?.normale && <small className="text-danger">{errors?.session?.normale}</small>}
                          </div>

                          <div className="col-md-3 mt-1">
                            <Field type="number" name="session.accelerated" className="form-control" placeholder={t("Accelerated")} />
                            {touched?.session?.accelerated && errors?.session?.accelerated && <small className="text-danger">{errors?.session?.accelerated}</small>}
                          </div>


                          <div className="col-md-3 mt-1">
                            <Field type="number" name="session.superAccelerated" className="form-control" placeholder={t("Super Accelerated")} />
                            {touched?.session?.superAccelerated && errors?.session?.superAccelerated && <small className="text-danger">{errors?.session?.superAccelerated}</small>}
                          </div>

                        </div>

                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary" disabled={(loading || !isValid)}>{t("Submit")}</button>
                          <button type="button" className="btn btn-outline-secondary" onClick={(e) => { OnCancel(e) }}>{t("Cancel")}</button>
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