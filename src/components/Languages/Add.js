import { Fragment, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form, FieldArray } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { createLanguage, editLanguage, getSingleLanguage } from '../../redux/languages/action';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts ,cleanSingle } from '../../redux/languages/reducer'; 

 
const Add = ({ editLanguageId , setEditLanguageId}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success , singleLanguage} = useSelector(state => state.languages)
  const { user } = useSelector(state => state.auth)
  const cancelBtnRef = useRef()

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

      //clear form
      OnCancel({target: cancelBtnRef?.current})

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

     dispatch(cleanAlerts())

  }, [success, error]);

   //back to list
   const OnCancel = (evt) => {
    setEditLanguageId("")

    setInitialValues({name: "", description: ""})
    cleanSingle()

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")

  }


  //formik initial
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    registerFees: "",
    session: [{
      ttype: "",
      hours: 0,
      price: 0,
    }],

  })

 

  //initial yup Scheme
  const LanguageAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    registerFees: yup.number().required(t("register Fees field is required")),
    session: yup.array().of(yup.object({ 
      hours: yup.number().required(t("hours field is required")),
      ttype: yup.string().required(`type field is required`),
      price: yup.number().required(`price field is required`),
    })).test({
      name: 'one-true',
      message: "session field is required",
      test: (val) => val.length > 0
    }),
  })


  //submit form
  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editLanguageId && editLanguageId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }


    if (editLanguageId && editLanguageId !== "") {//if edit  
      dispatch(editLanguage({ ...values, actions }))

    } else {//if add
      dispatch(createLanguage({ ...values, actions }))
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
            ({ touched, errors, isValid, values }) => (

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
                            {touched.name && errors.name && <small className="text-danger">{t(errors.name)}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Description")}</label>
                          <div className="col-md-9">
                            <Field as="textarea" type="text" rows="4" name="description" className="form-control" placeholder={t("Description")} />
                            {touched.description && errors.description && <small className="text-danger">{t(errors.description)}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Register Fees")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="number" name="registerFees" className="form-control" placeholder={t("Register Fees")} />
                            {touched.registerFees && errors.registerFees && <small className="text-danger">{t(errors.registerFees)}</small>}
                          </div>
                        </div>


                  
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>

                          <FieldArray
                            name="session"
                            render={arrayHelpers => (
                              <> {

                                values.session &&
                                values.session.map((_, index) => (
                                  <Fragment key={index}>

                                    {index !== 0 && <div className={"col-md-3"}></div>}

                                    <div className="col-md-4 mt-1">
                                      <Field as="select" type="text" name={`session.${index}.ttype`} className="form-control" placeholder={t("Type")}>
                                        <option value="">{t("Select...")}</option>
                                        <option value="normale">{t("Normale")}</option>
                                        <option value="accelerated">{t("Accelerated")}</option>
                                        <option value="superAccelerated">{t("Super Accelerated")}</option>
                                      </Field>
                                      {(touched?.session && touched?.session[index]?.ttype) && (errors?.session && errors?.session[index]?.ttype) && <small className="text-danger">{t(errors?.session[index]?.ttype)}</small>}
                                    </div>

                                    <div className="col-md-2 mt-1">
                                      <Field type="number" name={`session.${index}.hours`} className="form-control" placeholder={t("Hours")} />
                                      {(touched?.session && touched?.session[index]?.hours) && (errors?.session && errors?.session[index]?.hours) && <small className="text-danger">{t(errors?.session[index]?.hours)}</small>}
                                    </div>

                                    <div className="col-md-2 mt-1">
                                      <Field type="number" name={`session.${index}.price`} className="form-control" placeholder={t("Price")} />
                                      {(touched?.session && touched?.session[index]?.price) && (errors?.session && errors?.session[index]?.price) && <small className="text-danger">{t(errors?.session[index]?.price)}</small>}
                                    </div>


                                    <div className="col-md-1 col-12 mt-1">
                                      <button type="button" className="btn btn-danger w-100" onClick={() => arrayHelpers.remove(index)}>
                                        <i className="fa fa-minus"></i>
                                      </button>
                                    </div>

                                  </Fragment>

                                ))


                              }
                                <div className="col-12 p-2">
                                   {typeof errors.session === "string" && <small className="text-danger">{t(errors.session)}</small>}

                                  <button type="button" className="btn btn-success w-100" onClick={() => arrayHelpers.push({ hours: 0, normale: 0, accelerated: 0, superAccelerated: 0 })}>
                                    <i className="fa fa-plus"></i>
                                  </button>
                                </div>
                               
                              </>


                            )}
                          />


                        </div>


                   
                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary mr-3" disabled={(loading || !isValid)}>{t("Submit")}</button>
                          <button type="button" className="btn btn-outline-secondary" onClick={(e) => { OnCancel(e) }} ref={cancelBtnRef}>{t("Cancel")}</button>
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