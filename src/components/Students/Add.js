import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createStudent, editStudent, editStudentImage, getSingleStudent } from '../../redux/students/action';
import { getSingleBill } from '../../redux/bills/action';
import swal from 'sweetalert';
import { CreateSingleFile } from '../../api/file';
import myClassnames from 'classnames';
import { cleanAlerts } from '../../redux/students/reducer';
import { cleanAlerts as cleanLanguagesAlerts } from '../../redux/languages/reducer';
import { cleanAlerts as cleanGroupesAlerts } from '../../redux/groupes/reducer';
import { cleanAlerts as cleanLevelsAlerts } from '../../redux/levels/reducer';
import { checkString, loader } from '../../common/funs';
import { getLanguage } from '../../redux/languages/action';
import { getGroupe } from '../../redux/groupes/action';
import { getLevel } from '../../redux/levels/action';
import { getSinglePromotion } from '../../redux/promotions/action';
 
const Add = ({ editStudentId, setEditStudentId, initAdd }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  
  const { singleStudent, loading, error, success } = useSelector(state => state.students)
  const { loading:loadingLG, error:errorLG, languages } = useSelector(state => state.languages)
  const { loading:loadingLV, error:errorLV, levels } = useSelector(state => state.level)
  const { loading:loadingGR, error:errorGR, groupes } = useSelector(state => state.groupe)
  const { loading:loadingPro, singlePromotion } = useSelector(state => state.promotions)
  const { token, user } = useSelector(state => state.auth)
  const { singleBill } = useSelector(state => state.bills)

  const [generateData, setGenerateData] = useState({})
  const [Lloading, setLLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [groupeFilter, setGroupeFilter] = useState({option: null, session: null, language: null, level: null, })
  const [languageFilter, setLanguageFilter] = useState(null)
  const [hourFilter, setHourFilter] = useState(null)
  const [sessionAmount, setSessionAmount] = useState(0)//
  const [sessions, setSessions] = useState({})
  const [hours, setHours] = useState(["30" , "60"])



  //yup Scheme
  const [initialScheme, setInitialScheme] = useState({
    firstname: yup.string().required(t("firstname field is required")),
    lastname: yup.string().required(t("lastname field is required")),
    //gender: yup.string().oneOf(["male", "female"], t("you must select male or female")),
    gender: yup.string().required(t("gender field is required")),
    phone: yup.string().required(t("phone field is required")),
    birthday: yup.string().required(t("birthday field is required")),
    language: yup.string().required(t("language field is required")),
    option: yup.string().required(t("option field is required")),
    session: yup.string().required(t("session field is required")),
    cin: yup.string().required(t("cin field is required")),
    hours: yup.string().required(t("hours field is required")),
    isAccountActivated: yup.string().required(t("type field is required")),
    // level: yup.number().required(t("level field is required")).min(1, t("level field is required")),
    // group: yup.number().required(t("group field is required")).min(1, t("group field is required")),
    username: yup.string().required(t("username field is required")),
    email: yup.string().required(t("email field is required")).email("email must be email"),
    password: yup.string().required(t("password field is required")),
    confirmpassword: yup.string().required(t("confirm password field is required"))
      .test("confirmpassword", t("confirm password must be the same as password")
        , function (value) {
          return this.parent.password === value
        }),
  })


  //formik initial
  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    birthday: new Date(),
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    language: "",
    group: "",
    level: "",
    hours: "",
    option: "",
    session: "",
    cin: "",
    isAccountActivated: "yes",
    tested: "yes"
  })


  //clear All
  useEffect(() => {
    dispatch({ type: "clearAll" })
  }, [dispatch])

  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error || errorGR || errorLV) {
      swal(t("Error"), t(checkString(error || errorGR || errorLV)), "error");
    }

    //errorLG
    //errorLG
    //errorLG

    if (success || error) {
      dispatch(cleanAlerts())
    } else if (errorLG) {
      dispatch(cleanLanguagesAlerts())
    } else if (errorGR) {
      dispatch(cleanGroupesAlerts())
    } else if (errorLV) {
      dispatch(cleanLevelsAlerts())
    }

  }, [success, error, errorGR, errorLV, errorLG]);


 
  //get student data
  useEffect(() => {
    if (editStudentId && editStudentId !== "") {
      dispatch(getSingleStudent({ filter: { _id: editStudentId }, expend: "all" }))
      dispatch(getSingleBill({ filter: { studentID: editStudentId }}))
    }
  }, [editStudentId])


  //update student data
  useEffect(() => {
    if (singleStudent && singleStudent._id) {
      setInitialValues({...singleStudent, language: singleStudent.language?._id, level: singleStudent.level?._id, group: singleStudent.group?._id})
      setProfileImage(singleStudent.image)

      delete initialScheme.password
      delete initialScheme.confirmpassword
    
      setInitialScheme({ ...initialScheme})
      setSessions(singleStudent?.language?.session || [])
      setGroupeFilter({option: singleStudent.option, session: singleStudent.session, language: singleStudent.language?._id, level: singleStudent.level?._id || null })
      setLanguageFilter(singleStudent.language?._id || null)
    }
  }, [singleStudent])
 
    //update student amount
    useEffect(() => {
      if (editStudentId && editStudentId !== "") {
          setSessionAmount(singleBill?.amount || 0)
      }
    }, [singleBill])



  //get Languages
  useEffect(() => {
    if(initAdd) dispatch(getLanguage({ sort: { _id: -1 } }))
  }, [dispatch, initAdd])


  ////////////////////////////////Promotions///////////////////////////////////////////////
   //get Promotions
   useEffect(() => {
    if(languageFilter && languageFilter.length > 10 && hourFilter && hourFilter !== "" && hourFilter > 0){
      dispatch(getSinglePromotion({ filter: {language : languageFilter , "session.hours" : hourFilter } }))
    }
  }, [languageFilter, hourFilter])


   //update Promotion data
   useEffect(() => {
    if (singlePromotion && singlePromotion._id) {
      setSessions(singlePromotion.session)
    }
  }, [singlePromotion])
  //////////////////////////////////Promotions/////////////////////////////////////////////

  //get levels data
  useEffect(() => {
    if(languageFilter && languageFilter.length > 10){
      dispatch(getLevel({ sort: { _id: -1 } , filter: {language: languageFilter}}))
    }
  }, [languageFilter])


  //get groupes data
  useEffect(() => { 
    groupeFilter && groupeFilter.session && groupeFilter.option && groupeFilter.language && groupeFilter.level
    && dispatch(getGroupe({ sort: { _id: -1 } , filter: {...groupeFilter} }))
  }, [groupeFilter])



    //get hours
    useEffect(() => {

      if(languages && languages.length > 0 && languageFilter && languageFilter.length > 10){
          const index = languages.findIndex(l => l._id === languageFilter) 

          setHours(languages[index].session.map(s => s.hours))
          
      }else{
        setHours([])
      }
    }, [languages, languageFilter])

    
    //get session price
    useEffect(() => {

      if(languages && languages.length > 0 && hourFilter && hourFilter !== "" && hourFilter > 0){
          const index = languages.findIndex(l => l._id === languageFilter) 

          setSessions(languages[index].session.filter(s => s.hours == hourFilter)[0])
          
      }else{
        setSessions([])
      }
    }, [languages, hourFilter])



  //back to list
  const OnCancel = (evt) => {
    setEditStudentId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }

  //check for Generate username and password
  const canGenerate = () => {
    return generateData && generateData.firstname && generateData.lastname && generateData.firstname !== "" && generateData.lastname !== ""
  }

  //Generate username and password
  const Generate = () => {
    setInitialValues({
      ...generateData, username: `${generateData.firstname}-${generateData.lastname}`,
      confirmpassword: `${generateData.firstname}-${generateData.lastname}-123`,
      password: `${generateData.firstname}-${generateData.lastname}-123`
    })


    delete initialScheme.username
    delete initialScheme.password
    delete initialScheme.confirmpassword
    setInitialScheme({ ...initialScheme })


  }


  //submit form
  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editStudentId && editStudentId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }

    const newVals = {
      ...values,
      level: (values.level.length > 10) ? values.level : null,
      group: (values.group.length > 10) ? values.group : null,
      amount: sessionAmount,
      actions
    }
  
    if (editStudentId && editStudentId !== "") {//if edit  
      dispatch(editStudent({ ...newVals , image: profileImage }))

    } else {//if add
      if (!profileImage) {
        dispatch(createStudent({ ...newVals }))
      } else {

        dispatch(createStudent({ ...newVals, image: profileImage }))
      }
    }

  }


  //initial yup Scheme
  const StudentsAddValidator = yup.object().shape(initialScheme)

  //upload image
  const uploadImage = (e) => {

    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];

      const actions = {
        fullName: `${user.firstname} ${user.lastname}`,
        action: `${editStudentId && editStudentId !== "" ? "edit" : "add"}`,
        role: `${user.role}`
      }  


      const formData = new FormData();
      formData.append('image', img);
      formData.append('actions', actions);

      setLLoading(true)

      const authorization = { "Authorization": `bearer ${token}` }

      CreateSingleFile(formData, authorization).then(({ data }) => { //add token here
        setLLoading(false)


        setProfileImage(data.msg)

        if (!editStudentId || editStudentId === "") {
          swal(t("Uploaded"), t("Uploaded"), "success");
        } else {
          dispatch(editStudentImage({ image: data.msg, type: "" }))
        }


      }).catch(err => {
        console.log("api err ", err.response.data);
        swal(t("Not Updated"), typeof err.response.data.msg == "string" ? t(err.response.data.msg) : t(err.response.data.msg[0]), "error");
        setLLoading(false)
      })


    }
  }


  return (
    <div className="tab-pane" id="student-add">

      {(loading || loadingPro || Lloading || loadingGR || loadingLG || loadingLV ) && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={StudentsAddValidator}
          enableReinitialize={true}
          innerRef={(data) => (data ? setGenerateData(data.values) : setGenerateData({}))} >

          {
            ({ touched, errors, setFieldValue, setFieldTouched, values, isValid }) => (

              <Form action="#" method="post">

                <div className="row clearfix">


                  <div className="col-lg-8 col-md-12 col-sm-12 order-lg-1 order-md-2">
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
                          <label className="col-md-3 col-form-label">{t("First Name")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="firstname" className="form-control" placeholder={t("First Name")} />
                            {touched.firstname && errors.firstname && <small className="text-danger">{t(errors.firstname)}</small>}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Last Name")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="lastname" className="form-control" placeholder={t("Last Name")} />
                            {touched.lastname && errors.lastname && <small className="text-danger">{t(errors.lastname)}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Cin")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="cin" className="form-control" placeholder={t("Cin")} />
                            {touched.cin && errors.cin && <small className="text-danger">{t(errors.cin)}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Email")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="email" className="form-control" placeholder={t("Email")} />
                            {touched.email && errors.email && <small className="text-danger">{t(errors.email)}</small>}
                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Option")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="option" value={values.option} 
                             onChange={val => {
                               setFieldTouched("option")
                               setFieldValue("option", val.target.value)
                               setGroupeFilter({...groupeFilter, option: val.target.value})
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
                          <label className="col-md-3 col-form-label">{t("Language")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">

                            <Field as="select" className="form-control input-height" name="language" value={values.language} 
                              onChange={(val) => {
                                setFieldTouched("language")
                                setFieldValue("language", val.target.value)
                                setGroupeFilter({...groupeFilter, language: val.target.value})
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
                          <label className="col-md-3 col-form-label">{t("Hours")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="hours" value={values.hours} 
                              onChange={val => {
                                setFieldTouched("hours")
                                setFieldValue("hours", val.target.value)
                                setHourFilter(val.target.value)
                              }}>
                              <option value="">{t("Select...")}</option>

                              {hours && hours.length > 0 && hours.map((a, ai) => {
                                return <option key={ai} value={a}>{a}</option>
                              })}

                            </Field>
                            {touched.hours && errors.hours && <small className="text-danger">{t(errors.hours)}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Session")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="session" value={values.session}
                              onChange={val => {
                                setFieldTouched("session")
                                setFieldValue("session", val.target.value)
                                setGroupeFilter({...groupeFilter, session: val.target.value})
                                setSessionAmount(sessions[val.target.value])
                              }}>

                              <option value="">{t("Select...")}</option>

                              {sessions && sessions.normale > 0  && <option  value="normale">{`${t('Normale')} (${sessions.normale})`}</option>}
                              {sessions && sessions.accelerated > 0  && <option  value="accelerated">{`${t('Accelerated')} (${sessions.accelerated})`}</option>}
                              {sessions && sessions.superAccelerated > 0  && <option value="superAccelerated">{`${t('Super Accelerated')} (${sessions.superAccelerated})`}</option>}

                            </Field>
                            {touched.session && errors.session && <small className="text-danger">{t(errors.session)}</small>}

                          </div>
                        </div>


             
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Level")} </label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="level" value={values.level} 
                              onChange={val => {
                                setFieldTouched("level")
                                setFieldValue("level", val.target.value)
                                setGroupeFilter({...groupeFilter, level: val.target.value})
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
                          <label className="col-md-3 col-form-label">{t("Group")} </label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="group">

                              <option value="">{t("Select...")}</option>
                              {groupes && groupes.length > 0 && groupes.map((g, gi) => {
                                return <option key={gi} value={g._id}>{`${g.name} (${g.studentsCount})`}</option>
                              })}
                            </Field>
                            {touched.group && errors.group && <small className="text-danger">{t(errors.group)}</small>}

                          </div>
                        </div>


                  


                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">{t("Amount")} </label>
                            <div className="col-md-9">
                              <input value={sessionAmount} type="number" disabled name="amount" className="form-control" placeholder={t("Amount")} />
                            </div>
                          </div>
                      
                        

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Gender")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">

                            <Field as="select" name="gender" className="form-control input-height">
                              <option value="">{t("-- Gender --")}</option>
                              <option value="male">{t("Male")}</option>
                              <option value="female">{t("Female")}</option>
                            </Field>
                            {touched.gender && errors.gender && <small className="text-danger">{t(errors.gender)}</small>}

                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Phone")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="phone" className="form-control" placeholder={t("Phone")} />
                            {touched.phone && errors.phone && <small className="text-danger">{t(errors.phone)}</small>}
                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Date of Birth")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <DatePicker
                              selected={(values.birthday && new Date(values.birthday)) || null}
                              onChange={val => {
                                setFieldTouched("birthday")
                                setFieldValue("birthday", val);
                              }} className="form-control" placeholder={t("Date of Birth")} />

                            {touched.birthday && errors.birthday && <small className="text-danger">{t(errors.birthday)}</small>}
                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("is Account Activated")} <span className="text-danger">*</span></label>

                          <div className="col-md-7">
                            <div className="custom-controls-stacked">

                              <label className="custom-control custom-radio custom-control-inline">
                                <Field type="radio" className="custom-control-input" name="isAccountActivated" value="yes" />
                                <span className="custom-control-label">{t("Yes")}</span>
                              </label>

                              <label className="custom-control custom-radio custom-control-inline">
                                <Field type="radio" className="custom-control-input" name="isAccountActivated" value="no" />
                                <span className="custom-control-label">{t("No")}</span>
                              </label>


                            </div>
                          </div>

                          {touched.isAccountActivated && errors.isAccountActivated && <small className="text-danger">{t(errors.isAccountActivated)}</small>}

                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Tested")} <span className="text-danger">*</span></label>

                          <div className="col-md-7">
                            <div className="custom-controls-stacked">

                              <label className="custom-control custom-radio custom-control-inline">
                                <Field type="radio" className="custom-control-input" name="tested" value="yes" />
                                <span className="custom-control-label">{t("Yes")}</span>
                              </label>

                              <label className="custom-control custom-radio custom-control-inline">
                                <Field type="radio" className="custom-control-input" name="tested" value="no" />
                                <span className="custom-control-label">{t("No")}</span>
                              </label>


                            </div>
                          </div>

                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Profile Picture")}</label>
                          <div className="col-md-9">
                            <input type="file" className="dropify" accept=".png, .jpg, .jpeg" onChange={(e) => { uploadImage(e) }} />
                          </div>
                        </div>
 

                        <div className="form-group row">
                          <button type="submit" className="btn btn-primary mr-3" disabled={(loading || !isValid)}>{t("Submit")}</button>
                          <button type="button" className="btn btn-outline-secondary" onClick={(e) => { OnCancel(e) }}>{t("Cancel")}</button>
                        </div>

                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4 col-md-12 col-sm-12 order-lg-2 order-md-1">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">{t("Account Information")}</h3>
                        <div className="card-options ">
                          <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                          <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row clearfix">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>{t("User Name")} <span className="text-danger">*</span></label>
                              <Field type="text" name="username" className="form-control" placeholder={t("User Name")} />
                              {touched.username && errors.username && <small className="text-danger">{t(errors.username)}</small>}
                            </div>
                          </div>


                          <div className={myClassnames("col-sm-12", { "col-md-6": !editStudentId || editStudentId === "" })}>
                            <div className="form-group">
                              <label>{t("Password")} <span className="text-danger">*</span></label>
                              <Field type="text" name="password" className="form-control" placeholder={t("Password")} />
                              {touched.password && errors.password && <small className="text-danger">{t(errors.password)}</small>}
                            </div>
                          </div>

                          {(!editStudentId || editStudentId === "") && <> <div className="col-sm-12 col-md-6" >
                            <div className="form-group">
                              <label>{t("Confirm Password")} <span className="text-danger">*</span></label>
                              <Field type="text" name="confirmpassword" className="form-control" placeholder={t("Confirm Password")} />
                              {touched.confirmpassword && errors.confirmpassword && <small className="text-danger">{t(errors.confirmpassword)}</small>}
                            </div>
                          </div>

                            <div className="col-sm-12">
                              <button type="button" className="btn btn-primary" onClick={Generate} disabled={(loading || !canGenerate())}>{t("Generate")}</button>
                            </div> </>}


                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">{t("Account Information")}</h3>
                        <div className="card-options ">
                          <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                          <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label>{t("Facebook")}</label>
                          <Field type="text" name="facebook" className="form-control" placeholder={t("Facebook")} />
                          {touched.facebook && errors.facebook && <small className="text-danger">{t(errors.facebook)}</small>}
                        </div>


                        <div className="form-group">
                          <label>{t("Twitter")}</label>
                          <Field type="text" name="twitter" className="form-control" placeholder={t("Twitter")} />
                          {touched.twitter && errors.twitter && <small className="text-danger">{t(errors.twitter)}</small>}
                        </div>

                        <div className="form-group">
                          <label>{t("Linkedin")}</label>
                          <Field type="text" name="linkedin" className="form-control" placeholder={t("Linkedin")} />
                          {touched.linkedin && errors.linkedin && <small className="text-danger">{t(errors.linkedin)}</small>}
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