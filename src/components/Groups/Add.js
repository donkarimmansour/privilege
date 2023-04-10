import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { createGroupe, editGroupe, getSingleGroupe } from '../../redux/groupes/action';
import { cleanAlerts,cleanSingle } from '../../redux/groupes/reducer';
import { cleanAlerts as cleanLanguagesAlerts } from '../../redux/languages/reducer';
import { cleanAlerts as cleanLevelsAlerts } from '../../redux/levels/reducer';
import { cleanAlerts as cleanTeachersAlerts } from '../../redux/teachers/reducer';
import { cleanAlerts as cleanDepartmentsAlerts } from '../../redux/department/reducer';
import { getLevel } from '../../redux/levels/action';
import { getDepartment } from '../../redux/department/action';
import Calender from './Calender';
import moment from 'moment';
import { getTeacher } from '../../redux/teachers/action';
import { getLanguage } from '../../redux/languages/action';
 

const Add = ({ editGroupeId, setEditGroupeId , initAdd }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleGroupe } = useSelector(state => state.groupe)
  const { languages, loading:loadingLang, error:errorLang } = useSelector(state => state.languages)
  const { levels, loading:loadingLv, error:errorLv } = useSelector(state => state.level)
  const { teachers, loading:loadingTR, error:errorTR } = useSelector(state => state.teachers)
  const { departments, loading:loadingDR, error:errorDR } = useSelector(state => state.departments)
  const [schedule, setSchedule] = useState([])
  const { user } = useSelector(state => state.auth)
  const [langaugeID, setLangaugeID] = useState(null)
  const cancelBtnRef = useRef()

 
  //get groupe data
  useEffect(() => {
    if (editGroupeId && editGroupeId !== "") {
      dispatch(getSingleGroupe({ filter: { _id: editGroupeId } }))
      dispatch(getDepartment({ sort: { _id: -1 } }))
      dispatch(getLanguage({ sort: { _id: -1 } }))
    }
  }, [editGroupeId])


  //get levels data
  useEffect(() => {
   if(langaugeID && langaugeID.length > 10){
     dispatch(getLevel({ sort: { _id: -1 }, filter: { language: langaugeID } }))
     dispatch(getTeacher({ sort: { _id: -1 }, filter: { language: langaugeID } }))
   }   
  }, [langaugeID])

  //update groupe data
  useEffect(() => {
    if (singleGroupe && singleGroupe._id) {
      setInitialValues({ ...singleGroupe})
      dispatch(getLevel({ sort: { _id: -1 }, filter: { language: singleGroupe.language } }))
      dispatch(getTeacher({ sort: { _id: -1 }, filter: { language: singleGroupe.language } }))


      const newSchedule = singleGroupe.calindar?.map(date => {

        if (date.day === "Sunday") {
          return moment(`"2023-01-01 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Monday") {
          return moment(`"2023-01-02 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Tuesday") {
          return moment(`"2023-01-03 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Wednesday") {
          return moment(`"2023-01-04 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Thursday") {
          return moment(`"2023-01-05 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Friday") {
          return moment(`"2023-01-06 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Saturday") {
          return moment(`"2023-01-07 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")
        } else {
          return null
        }

      }).filter(d => !!d)

      setSchedule(newSchedule)

    }
  }, [singleGroupe])

  //get Languages, departments and Teachers data
  useEffect(() => {
    if (initAdd) {
      dispatch(getDepartment({ sort: { _id: -1 } }))
      dispatch(getLanguage({ sort: { _id: -1 } }))
    }
  }, [dispatch, initAdd])

  //alerts
  useEffect(() => {
    if ((success)) {
      swal(t("Success"), t(checkString((success))), "success");

      //clear form
      OnCancel({target: cancelBtnRef?.current})

    } else if ((error || errorLv || errorTR || errorLang || errorDR)) {
      swal(t("Error"), t(checkString((error || errorLv || errorTR || errorLang || errorDR))), "error");
    }
 

    if (error || success) {
      dispatch(cleanAlerts())
    } else if (errorTR) {
      dispatch(cleanTeachersAlerts())
    } else if (errorLv) {
      dispatch(cleanLevelsAlerts())
    } else if (errorLang) {
      dispatch(cleanLanguagesAlerts())
    } else if (errorDR) {
      dispatch(cleanDepartmentsAlerts())
    }



  }, [success, error, errorLv, errorTR, errorLang, errorDR]);

  //back to list
  const OnCancel = (evt) => {
    setEditGroupeId("")

    setInitialValues({
      name: "",
      level: "",
      department: "",
      language: "",
      session: "",
      teacher: "",
      //  calindar: "",
      option: ""
    })

    cleanSingle()

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }

  //formik initial
  const [initialValues, setInitialValues] = useState({
    name: "",
    level: "",
    department: "",
    language: "",
    session: "",
    teacher: "",
    //  calindar: "",
    option: "",
  })


  //initial yup Scheme
  const GroupeAddValidator = yup.object().shape({
    language: yup.string().required(t("language field is required")),
    session: yup.string().required(t("session field is required")),
    teacher: yup.string().required(t("teacher field is required")),
    //  calindar: yup.string().required(t("calindar field is required")),
    option: yup.string().required(t("option field is required")),
    name: yup.string().required(t("name field is required")),
    level: yup.string().required(t("level field is required")),//.min(1, t("group field is required")),
    department: yup.string().required(t("department field is required")),//.min(1, t("department field is required")),

  })


  //submit form 
  const onSubmit = values => {

    let newSchedule = []

    if (schedule.length > 0) {
      //swal(t("Error"), t(checkString("error")), "error")
     newSchedule = schedule

      .filter(d => {
        if (moment(d).format("H") > 7 && moment(d).format("H") < 20) {
          return d
        }
      })

      .map(date => ({
        day: moment(date).format("dddd"),
        time: moment(date).format("HH:mm")
      }))

    }
   
      const actions = {
        fullName: `${user.firstname} ${user.lastname}`,
        action: `${editGroupeId && editGroupeId !== "" ? "edit" : "add"}`,
        role: `${user.role}`
      }

      if (editGroupeId && editGroupeId !== "") {//if edit  
        dispatch(editGroupe({ ...values, actions, calindar: newSchedule }))
      } else {//if add
        dispatch(createGroupe({ ...values, actions, calindar: newSchedule }))

      }
 


  }



  return (
    <div className="tab-pane" id="groupe-add">

      {(loading || loadingLang || loadingLv || loadingDR || loadingTR) && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={GroupeAddValidator}
          enableReinitialize={true}>

          {
            ({ touched, errors, isValid, setFieldValue, setFieldTouched, values }) => (

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
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="session">
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
                            <Field as="select" className="form-control input-height" name="option">
                              <option value="">{t("Select...")}</option>
                              <option value="day">{t('Day')}</option>
                              <option value="evening">{t('Evening')}</option>
                              <option value="weekend">{t('Weekend')}</option>
                            </Field>
                            {touched.option && errors.option && <small className="text-danger">{t(errors.option)}</small>}

                          </div>
                        </div>




                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Department")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="department">
                              <option value="">{t("Select...")}</option>

                              {departments && departments.length > 0 && departments.map((d, di) => {
                                return <option key={di} value={d._id}>{`${d.floorName} - ${d.className}`}</option>
                              })}


                            </Field>
                            {touched.department && errors.department && <small className="text-danger">{t(errors.department)}</small>}

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
                            {touched.language && errors.language && <small className="text-danger">{t(errors.language)}</small>}

                          </div>
                        </div>



                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Teacher")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="teacher">
                              <option value="">{t("Select...")}</option>

                              {teachers && teachers.length > 0 && teachers.map((t, ti) => {
                                return <option key={ti} value={t._id}>{`${t.firstname} ${t.lastname}`}</option>
                              })}


                            </Field>
                            {touched.teacher && errors.teacher && <small className="text-danger">{t(errors.teacher)}</small>}

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
                            {touched.level && errors.level && <small className="text-danger">{t(errors.level)}</small>}

                          </div>
                        </div>




                        <div className="form-group mb-5">

                          <Calender schedule={schedule} setSchedule={setSchedule} />

                        </div>



                        <div className="col-sm-12 ">
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