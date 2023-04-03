import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { cleanAlerts as cleanGroupesAlerts } from '../../redux/groupes/reducer';
import { cleanAlerts } from '../../redux/cancelations/reducer';
import { checkString, loader } from '../../common/funs';
import { getGroupe } from '../../redux/groupes/action';
import swal from 'sweetalert';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { createCancelations, editCancelation, getSingleCancelation } from '../../redux/cancelations/action';
 
const Add = ({editCancelationId ,  setEditCancelationId, initAdd }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleCancelation } = useSelector(state => state.cancelations)
  const { loading: loadingGR, error: errorGR, groupes } = useSelector(state => state.groupe)
  const { user } = useSelector(state => state.auth)


  
  //get cancelation data
  useEffect(() => {
    if (editCancelationId && editCancelationId !== "") {
      dispatch(getSingleCancelation({ filter: { _id: editCancelationId } }))
    }
  }, [editCancelationId]) 

   //update cancelation data
   useEffect(() => {
    if (singleCancelation && singleCancelation._id) {
      setInitialValues(singleCancelation)
    }
  }, [singleCancelation])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error || errorGR) {
      swal(t("Error"), t(checkString(error || errorGR)), "error");
    }


    if (success || error) {
      dispatch(cleanAlerts())
    } else if (errorGR) {
      dispatch(cleanGroupesAlerts())
    }
    

  }, [success, error, errorGR]);


  //back to list
  const OnCancel = (evt) => {
    setEditCancelationId("")

    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }

  //formik initial
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    day: "",
    group: ""
  })

  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editCancelationId && editCancelationId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }


    if (editCancelationId && editCancelationId !== "") {//if edit  
      dispatch(editCancelation({ ...values, actions }))
    } else {//if add
      dispatch(createCancelations({ ...values, actions }))

    }


  }

  const CancelationsValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    description: yup.string().required(t("description field is required")),
    group: yup.string().required(t("group field is required")),
    day: yup.string().required(t("day field is required"))

  })

  const filterBy = () => true

  //get Students
  const handleSearch = (query) => {
    dispatch(getGroupe({ sort: { _id: -1 }, filter: { name: { $regex: query, $options: "i" } } }))
  }


  return (
    <div className="tab-pane" id="cancelation-add">

      {(loading || loadingGR) && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={CancelationsValidator}
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
                          <label className="col-md-3 col-form-label">{t("Day")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="day">
                              <option value="">{t("Select...")}</option>
                              <option value="Monday">{t('Monday')}</option>
                              <option value="Tuesday">{t('Tuesday')}</option>
                              <option value="Wednesday">{t('Wednesday')}</option>
                              <option value="Thursday">{t('Thursday')}</option>
                              <option value="Friday">{t('Friday')}</option>
                              <option value="Saturday">{t('Saturday')}</option>
                              <option value="Sunday">{t('Sunday')}</option>
      
                            </Field>
                            {touched.day && errors.day && <small className="text-danger">{t(errors.day)}</small>}

                          </div>
                        </div>

                


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Groups")}  <span className="text-danger">*</span></label>
                          <div className="col-md-9">

                              <AsyncTypeahead id="groupes"
                                caseSensitive={false}
                                filterBy={filterBy}
                                onChange={selected => {
                                  setFieldTouched("group")      
                                  setFieldValue("group", selected[0]?._id || "" )
                                  
                                }}
                                labelKey={(option) => option.name }
                                minLength={1}
                                size={"lg"}
                                multiple={true}
                                options={groupes}
                                placeholder={t("Select...")}
                                isLoading={loadingGR}
                                onSearch={handleSearch}
                                renderMenuItemChildren={(option) => (
                                  <p key={option._id}>{option.name}</p>
                               )}
                              />
                            {touched.group && errors.group && <small className="text-danger">{t(errors.group)}</small>}

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