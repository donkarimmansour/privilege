import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/library/reducer';
import { createLibrary, editLibrary, getSingleLibrary } from '../../redux/library/action';
import { getLevel } from '../../redux/levels/action';
import { getLanguage } from '../../redux/languages/action';

 
const Add = ({ editLibraryId , setEditLibraryId }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleLibrary } = useSelector(state => state.library)
  const { languages, loading:loadingLang, error:errorLang, success:successLang,  } = useSelector(state => state.languages)
  const { levels, loading:loadingLv, error:errorLv, success:successLv,  } = useSelector(state => state.level)
  const { user } = useSelector(state => state.auth)
  const [langaugeID, setLangaugeID] = useState(null)

  //get student data
  useEffect(() => {
    if (editLibraryId && editLibraryId !== "") {
      dispatch(getSingleLibrary({ filter: { _id: editLibraryId } }))
    }
  }, [editLibraryId])

    //get classes data
    useEffect(() => {
      dispatch(getLanguage({ sort: { _id: -1 } }))
    }, [dispatch])


    //get levels data
    useEffect(() => {
      langaugeID && langaugeID.length > 10 && dispatch(getLevel({ sort: { _id: -1 } , filter: {language : langaugeID}}))
    }, [langaugeID])
 
   //update level data
   useEffect(() => {
    if (singleLibrary && singleLibrary._id) {
      setInitialValues(singleLibrary)
      dispatch(getLevel({ sort: { _id: -1 } , filter: {language : singleLibrary.language}}))
    }
  }, [singleLibrary])


  //alerts
  useEffect(() => {
    if (success || successLang || successLv) {
      swal(t("Success"), t(checkString(success || successLang || successLv)), "success");

    } else if (error || errorLang || errorLv) {
      swal(t("Error"), t(checkString(error || errorLang || errorLv)), "error");
    }

     dispatch(cleanAlerts())

  }, [error, errorLang, errorLv, success, successLang, successLv]);




  //back to list
  const OnCancel = (evt) => {
    setEditLibraryId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }



  //formik initial
  const [initialValues, setInitialValues] = useState({
    title: "",
    quantity: "",
    level: "", 
    language: "",
  })



  //initial yup Scheme
 const LibraryAddValidator = yup.object().shape({
    title: yup.string().required(t("title field is required")),
    quantity: yup.number().required(t("quantity field is required")),
    level: yup.string().required(t("level field is required")),
    language: yup.string().required(t("language field is required")),
  })


  //submit form 
  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editLibraryId && editLibraryId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }



    if (editLibraryId && editLibraryId !== "") {//if edit  
      dispatch(editLibrary({ ...values, actions }))
    } else {//if add
      dispatch(createLibrary({ ...values, actions })) 

    }
  }



  return (
    <div className="tab-pane" id="library-add">

       {(loading || loadingLang || loadingLv ) && loader()}

      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LibraryAddValidator}
          enableReinitialize={true}>

          {
            ({  touched, errors, isValid, setFieldValue, setFieldTouched, values  }) => (

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
                            <Field as="select" className="form-control input-height" name="language" value={values.language}
                            
                             onChange={val => {
                                setFieldTouched("language")
                                setFieldValue("language", val.target.value)
                                setLangaugeID(val.target.value)
                              }}>

                              <option value="">{t("Select...")}</option>


                              {languages && languages.length > 0 && languages.map((c, ci) => {
                                return <option key={ci} value={c._id}>{c.name}</option>
                              })}

                            </Field>
                            {touched.language && errors.language && <small className="text-danger">{errors.language}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Level")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="level">
                              <option value="">{t("Select...")}</option>

                              {levels && levels.length > 0 && levels.map((l, li) => {
                                return <option key={li} value={l._id}>{l.name}</option>
                              })}

                            </Field>
                            {touched.level && errors.level && <small className="text-danger">{errors.level}</small>}

                          </div>
                        </div>
                  


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Quantity")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="number" name="quantity" className="form-control" placeholder={t("Quantity")} />
                            {touched.quantity && errors.quantity && <small className="text-danger">{errors.quantity}</small>}
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