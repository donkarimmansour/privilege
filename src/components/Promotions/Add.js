import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { cleanAlerts as cleanLanguagesAlerts } from '../../redux/languages/reducer';
import { cleanAlerts } from '../../redux/promotions/reducer';
import { checkString, loader } from '../../common/funs';
import { getLanguage } from '../../redux/languages/action';
import swal from 'sweetalert';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { createPromotions, editPromotion, getSinglePromotion } from '../../redux/promotions/action';

const Add = ({editPromotionId ,  setEditPromotionId}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singlePromotion } = useSelector(state => state.promotions)
  const { loading: loadingLang, error: errorLang, success: successLang, languages } = useSelector(state => state.languages)
  const { user } = useSelector(state => state.auth)


  
  
  //get promotion data
  useEffect(() => {
    if (editPromotionId && editPromotionId !== "") {
      dispatch(getSinglePromotion({ filter: { _id: editPromotionId } }))
    }
  }, [editPromotionId]) 

   //update promotion data
   useEffect(() => {
    if (singlePromotion && singlePromotion._id) {
      setInitialValues(singlePromotion)
    }
  }, [singlePromotion])



  //alerts
  useEffect(() => {
    if (success || successLang) {
      swal(t("Success"), t(checkString(success || successLang)), "success");

    } else if (error || errorLang) {
      swal(t("Error"), t(checkString(error || errorLang)), "error");
    }

    dispatch(cleanAlerts())

    if (success || error) {
      dispatch(cleanAlerts())
    } else if (successLang || errorLang) {
      dispatch(cleanLanguagesAlerts())
    }

  }, [success, successLang, error, errorLang]);


  //back to list
  const OnCancel = (evt) => {
    setEditPromotionId("")

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }

  //formik initial
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    language: "",
    session: {
      hours: 0,
      normale: 0,
      accelerated: 0,
      superAccelerated: 0,
    },

  })

  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editPromotionId && editPromotionId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }

    if (editPromotionId && editPromotionId !== "") {//if edit  
      dispatch(editPromotion({...values, actions }))
    } else {//if add
      dispatch(createPromotions({...values, actions }))

    }
  }

  const PromotionsValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    description: yup.string().required(t("description field is required")),
    language: yup.string().required(t("language field is required")),
    session: yup.object({
      hours: yup.string().required(t("hours field is required")),
      normale: yup.number().required(`normale field is required`),
      accelerated: yup.number().required(`accelerated field is required`),
      superAccelerated: yup.number().required(`super Accelerated field is required`),
    }),

  })

  const filterBy = () => true

  //get Students
  const handleSearch = (query) => {
    dispatch(getLanguage({ sort: { _id: -1 }, filter: { name: { $regex: query, $options: "i" } } }))
  }


  return (
    <div className="tab-pane" id="promotion-add">

      {(loading || loadingLang) && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={PromotionsValidator}
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
                            <Field type="text" name="name" className="form-control" placeholder={t("Name")} />
                            {touched.name && errors.name && <small className="text-danger">{t(errors.name)}</small>}
                          </div>
                        </div> 


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Description")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as='textarea' row="5" name="description" className="form-control" placeholder={t("Description")} />
                            {touched.description && errors.description && <small className="text-danger">{t(errors.description)}</small>}
                          </div>
                        </div>




                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Language")}  <span className="text-danger">*</span></label>
                          <div className="col-md-9">

                              <AsyncTypeahead id="languages"
                                caseSensitive={false}
                                filterBy={filterBy}
                                onChange={selected => {
                                  setFieldTouched("language")      
                                  setFieldValue("language", selected[0]?._id || "" )
                                  
                                }}
                                labelKey={(option) => option.name }
                                minLength={1}
                                size={"lg"}
                                multiple={true}
                                options={languages}
                                placeholder={t("Select...")}
                                isLoading={loadingLang}
                                onSearch={handleSearch}
                                renderMenuItemChildren={(option) => (
                                  <p key={option._id}>{option.name}</p>
                               )}
                              />
                            {touched.language && errors.language && <small className="text-danger">{t(errors.language)}</small>}

                          </div>
                        </div>


                        
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>

                          <div className="col-md-2 mt-1">
                            <Field type="number" name="session.hours" className="form-control" placeholder={t("Hours")} />
                            {touched?.session?.hours && errors?.session?.hours && <small className="text-danger">{t(errors?.session?.hours)}</small>}
                          </div>

                          <div className="col-md-2 mt-1">
                            <Field type="number" name="session.normale" className="form-control" placeholder={t("Normale")} />
                            {touched?.session?.normale && errors?.session?.normale && <small className="text-danger">{t(errors?.session?.normale)}</small>}
                          </div>

                          <div className="col-md-2 mt-1">
                            <Field type="number" name="session.accelerated" className="form-control" placeholder={t("Accelerated")} />
                            {touched?.session?.accelerated && errors?.session?.accelerated && <small className="text-danger">{t(errors?.session?.accelerated)}</small>}
                          </div>


                          <div className="col-md-3 mt-1">
                            <Field type="number" name="session.superAccelerated" className="form-control" placeholder={t("Super Accelerated")} />
                            {touched?.session?.superAccelerated && errors?.session?.superAccelerated && <small className="text-danger">{t(errors?.session?.superAccelerated)}</small>}
                          </div>

                        </div>


                        <div className="form-group row">
                          <button type="submit" className="btn btn-primary mr-3" disabled={(loading || !isValid)}>{t("Submit")}</button>
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