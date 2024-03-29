import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, getUniqueListBy, loader } from '../../common/funs';
import swal from 'sweetalert';
import { createLevel, editLevel, getSingleLevel } from '../../redux/levels/action';
import { cleanAlerts ,cleanSingle  } from '../../redux/levels/reducer';
import { getLanguage } from '../../redux/languages/action';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { cleanAlerts as cleanLanguagesAlerts } from '../../redux/languages/reducer';

const Add = ({editLevelId , setEditLevelId, initAdd }) => { 
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleLevel } = useSelector(state => state.level)
  const { loading: loadingLang,  error: errorLang, languages  } = useSelector(state => state.languages)
  const { user } = useSelector(state => state.auth)
  const cancelBtnRef = useRef()

  
  //get level data
  useEffect(() => {
    if (editLevelId && editLevelId !== "") {
      dispatch(getSingleLevel({ filter: { _id: editLevelId } }))
      dispatch(getLanguage({ sort: { _id: -1 } }))
    }
  }, [editLevelId])

   //update level data
   useEffect(() => {
    if (singleLevel && singleLevel._id) {
      setInitialValues({...singleLevel, languages: [singleLevel.languages]})
    }
  }, [singleLevel])


  //get classes data
  useEffect(() => {
    if(initAdd) dispatch(getLanguage({ sort: { _id: -1 } }))
  }, [dispatch, initAdd])



  //alerts
  useEffect(() => { 
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

      //clear form
      OnCancel({target: cancelBtnRef?.current})

    } else if (error || errorLang) {
      swal(t("Error"), t(checkString(error || errorLang)), "error");
    } 

    if (error || success) {
      dispatch(cleanAlerts())
    } else if (errorLang) {
      dispatch(cleanLanguagesAlerts())
    }
  }, [success, error, errorLang]);


  //back to list
  const OnCancel = (evt) => {
    setEditLevelId("")

    setInitialValues({ name: "", languages: []})
    
    cleanSingle()

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }



  //formik initial
  const [initialValues, setInitialValues] = useState({
      name: "",
      languages: [],
  })



  //initial yup Scheme
   const LevelAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    languages: yup.array().required(t("languages field is required")),
  })



  //submit form 
  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editLevelId && editLevelId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }


    if (editLevelId && editLevelId !== "") {//if edit  
      const languages = values.languages[0]
      dispatch(editLevel({ ...values, languages, actions }))

    } else {//if add
      const languages = getUniqueListBy(values.languages , "id")
      dispatch(createLevel({ ...values, languages, actions }))

    }

  }

  //get Languages
  const handleSearch = (query) => {
    dispatch(getLanguage({
      sort: { _id: -1 }, filter: { name: { $regex: query, $options: "i" } }
    }))
  }


  const filterBy = () => true



  return (
    <div className="tab-pane" id="level-add">

       {loading && loader()}


      {
        <Formik
          initialValues={initialValues || singleLevel}
          onSubmit={onSubmit}
          validationSchema={LevelAddValidator}
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
                          <label className="col-md-3 col-form-label">{t("Languages")}  <span className="text-danger">*</span></label>
                          <div className="col-md-7">

                            {languages && languages.length &&


                              <AsyncTypeahead id="languages"
                                defaultSelected={values.languages}
                                caseSensitive={false}
                                filterBy={filterBy}
                                onChange={selected => {
                                  setFieldTouched("languages")

                                  if (editLevelId && editLevelId !== "") {//if edit  
                                      setFieldValue("languages", [selected[0]] )

                                  } else {//if add        
                                      setFieldValue("languages", selected.map(s => ({id: s._id, name: s.name})) )
                                  }
                                }}
                                labelKey={(option) => `${option.name}`}
                                minLength={1}
                                size={"lg"}
                                multiple={!(editLevelId && editLevelId !== "")}
                                options={languages}
                                placeholder={t("Select...")}
                                isLoading={loadingLang}
                                onSearch={handleSearch}
                                renderMenuItemChildren={(option) => (
                                  <p key={option._id} id={option._id}>{`${option.name}`}</p>
                                )}
                              />
                            } 
                            {touched.languages && errors.languages && <small className="text-danger">{t(errors.languages)}</small>}


                          </div>
                        </div>


                         <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary mr-3" disabled={(loading || !isValid)} >{t("Submit")}</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={(e) => {OnCancel(e)}} ref={cancelBtnRef}>{t("Cancel")}</button>
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