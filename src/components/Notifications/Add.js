import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from '../../redux/languages/action';
import { getLevel } from '../../redux/levels/action';
import { cleanAlerts as cleanLanguagesAlerts } from '../../redux/languages/reducer';
import { cleanAlerts as cleanGroupesAlerts } from '../../redux/groupes/reducer';
import { cleanAlerts as cleanLevelsAlerts } from '../../redux/levels/reducer';
import { cleanAlerts as cleanStudentsAlerts } from '../../redux/students/reducer';
import { cleanAlerts } from '../../redux/notifications/reducer';
import { checkString, getUniqueListBy, loader } from '../../common/funs';
import { getGroupe } from '../../redux/groupes/action';
import swal from 'sweetalert';
import { createNotifications } from '../../redux/notifications/action';
import { getStudent } from '../../redux/students/action';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Add = ({initAdd}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success } = useSelector(state => state.notifications)
  const { loading: loadingGR, error: errorGR, groupes } = useSelector(state => state.groupe)
  const { loading: loadingLG, error: errorLG, languages } = useSelector(state => state.languages)
  const { loading: loadingLV, error: errorLV, levels } = useSelector(state => state.level)
  const { loading: loadingSD, error: errorSD, students } = useSelector(state => state.students)
  const { user } = useSelector(state => state.auth)

  const [groupeFilter, setGroupeFilter] = useState({ option: null, session: null, language: null, level: null, })
  const [languageFilter, setLanguageFilter] = useState(null)
  const [studentFilter, setStudentFilter] = useState(null)

 
  //get Languages
  useEffect(() => {
    if(initAdd) dispatch(getLanguage({ sort: { _id: -1 } }))
  }, [dispatch, initAdd]) 


  //get levels data
  useEffect(() => {
    if (languageFilter && languageFilter.length > 10) {
      dispatch(getLevel({ sort: { _id: -1 }, filter: { language: languageFilter } }))
    }
  }, [languageFilter])


  //get groupes data
  useEffect(() => {
    groupeFilter && groupeFilter.session && groupeFilter.option && groupeFilter.language && groupeFilter.level
      && dispatch(getGroupe({ sort: { _id: -1 }, filter: { ...groupeFilter } }))
  }, [groupeFilter])


   //get student data
   useEffect(() => {
    if (studentFilter && studentFilter.length > 10) {
      dispatch(getStudent({ sort: { _id: -1 }, filter: { group: studentFilter } }))
    }
  }, [studentFilter])



  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error || errorGR || errorLV || errorSD) {
      swal(t("Error"), t(checkString(error || errorGR || errorLV || errorSD)), "error");
    }

    if (error || success) {
      dispatch(cleanAlerts())
    } else if (errorLV) {
      dispatch(cleanLevelsAlerts())
    } else if (errorLG) {
      dispatch(cleanLanguagesAlerts())
    } else if (errorGR) {
      dispatch(cleanGroupesAlerts())
    } else if (errorSD) {
      dispatch(cleanStudentsAlerts())
    }


  }, [success, success, error, errorGR, errorLV, errorSD, errorLG]);


  //back to list
  const OnCancel = (evt) => {
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }



  const initialValues = {
    language: "",
    group: "",
    level: "",
    option: "",
    session: "",
    message: "",
    title: "",
    listIds: []
  }

  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `add`,
      role: `${user.role}`
    }

    const listIds = getUniqueListBy(values.listIds , "id")

    dispatch(createNotifications({...values, listIds, actions }))

  }

  const NotificationsValidator = yup.object().shape({
    language: yup.string().required(t("language field is required")),
    option: yup.string().required(t("option field is required")),
    session: yup.string().required(t("session field is required")),
    level: yup.string().required(t("level field is required")),
    group: yup.string().required(t("group field is required")),
    message: yup.string().required(t("message field is required")),
    title: yup.string().required(t("title field is required")),
    listIds: yup.array().required(t("students field is required")),

  })

  const filterBy = () => true

  //get Students
  const handleSearch = (query) => {

    dispatch(getStudent({
      sort: { _id: -1 }, filter: { group: studentFilter,
        $or: [
          { firstname: { $regex: query, $options: "i" } },
          { lastname: { $regex: query, $options: "i" } },
          { username: { $regex: query, $options: "i" } }
        ]
      }
    }))
  }


  return (
    <div className="tab-pane" id="notification-add">

      {(loading || loadingGR || loadingLG || loadingLV || loadingSD) && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={NotificationsValidator}>

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
                          <label className="col-md-3 col-form-label">{t("Language")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">

                            <Field as="select" className="form-control input-height" name="language" value={values.language}
                              onChange={val => {
                                setFieldTouched("language")
                                setFieldValue("language", val.target.value)
                                setGroupeFilter({ ...groupeFilter, language: val.target.value })
                                setLanguageFilter(val.target.value)
                              }}>

                              <option value="">{t("Select...")}</option>

                              {languages && languages.length > 0 && languages.map((c, ci) => {
                                return <option key={ci} value={c._id}>{c.name}</option>
                              })}

                            </Field>
                            {touched.language && errors.language && <small className="text-danger">{t(errors.language)}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="session" value={values.session}
                              onChange={val => {
                                setFieldTouched("session")
                                setFieldValue("session", val.target.value)
                                setGroupeFilter({ ...groupeFilter, session: val.target.value })
                              }}>

                              <option value="">{t("Select...")}</option>
                              <option value="normale">{t("Normale")}</option>
                              <option value="accelerated">{t("Accelerated")}</option>
                              <option value="superAccelerated">{t("Super Accelerated")}</option>
                              
                            </Field>
                            {touched.session && errors.session && <small className="text-danger">{t(errors.session)}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Option")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="option" value={values.option}
                              onChange={val => {
                                setFieldTouched("option")
                                setFieldValue("option", val.target.value)
                                setGroupeFilter({ ...groupeFilter, option: val.target.value })
                              }}>

                              <option value="">{t("Select...")}</option>
                              <option value="day">{t('Day')}</option>
                              <option value="evening">{t('Evening')}</option>
                              <option value="weekend">{t('Weekend')}</option>
                            </Field>
                            {touched.option && errors.option && <small className="text-danger">{t(errors.option)}</small>}

                          </div>
                        </div>

                  

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Level")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="level" value={values.level}
                              onChange={val => {
                                setFieldTouched("level")
                                setFieldValue("level", val.target.value)
                                setGroupeFilter({ ...groupeFilter, level: val.target.value })
                              }}>
                              <option value="">{t("Select...")}</option>

                              {levels && levels.length > 0 && levels.map((l, li) => {
                                return <option key={li} value={l._id}>{l.name}</option>
                              })}

                            </Field>
                            {touched.level && errors.level && <small className="text-danger">{t(errors.level)}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Group")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="group"  value={values.group}
                             onChange={val => {
                              setFieldTouched("group")
                              setFieldValue("group", val.target.value)
                              setStudentFilter(val.target.value)
                            }}>

                              <option value="">{t("Select...")}</option>
                              {groupes && groupes.length > 0 && groupes.map((g, gi) => {
                                return <option key={gi} value={g._id}>{g.name}</option>
                              })}
                            </Field>
                            {touched.group && errors.group && <small className="text-danger">{t(errors.group)}</small>}

                          </div>
                        </div>



                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Students")}  <span className="text-danger">*</span></label>
                          <div className="col-md-7">

                              <AsyncTypeahead id="students"
                                defaultSelected={students}
                                caseSensitive={false}
                                filterBy={filterBy}
                                onChange={selected => {
                                  setFieldTouched("listIds")      
                                  setFieldValue("listIds", selected.map(s => ({ id: s._id, firstname: s.firstname, lastname: s.lastname }) ) )
                                  
                                }}
                                labelKey={(option) => `${option.firstname} ${option.lastname} (${option.username})`}
                                minLength={1}
                                size={"lg"}
                                multiple={true}
                                options={students}
                                placeholder={t("Select...")}
                                isLoading={loadingSD}
                                onSearch={handleSearch}
                                renderMenuItemChildren={(option) => (
                                  <p key={option._id}>{`${option.firstname} ${option.lastname} (${option.username})`}</p>
                               )}
                              />
                            
                            {touched.listIds && errors.listIds && <small className="text-danger">{t(errors.listIds)}</small>}

                          </div>
                        </div>



                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Title")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="title" className="form-control" placeholder={t("Title")} />
                            {touched.title && errors.title && <small className="text-danger">{t(errors.title)}</small>}
                          </div>
                        </div> 


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Message")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as='textarea' row="5" name="message" className="form-control" placeholder={t("Message")} />
                            {touched.message && errors.message && <small className="text-danger">{t(errors.message)}</small>}
                          </div>
                        </div>



                        <div className="form-group row">
                          <button type="submit" className="btn btn-primary mr-3" disabled={(loading || !isValid)}>{t("Send")}</button>
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