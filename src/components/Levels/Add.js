import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { createLevel, editLevel, getSingleLevel } from '../../redux/levels/action';
import { cleanAlerts } from '../../redux/levels/reducer';
import { getCourse } from '../../redux/courses/action';
import { getGroupe } from '../../redux/groupes/action';
import { getDepartment } from '../../redux/department/action';


const Add = ({editLevelId , setEditLevelId}) => { 
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleLevel } = useSelector(state => state.level)
  const { groupes } = useSelector(state => state.groupe)
  const { departments } = useSelector(state => state.departments)

  //get level data
  useEffect(() => {
    if (editLevelId && editLevelId !== "") {
      dispatch(getSingleLevel({ filter: { _id: editLevelId } }))
    }
  }, [editLevelId])

   //update level data
   useEffect(() => {
    if (singleLevel && singleLevel._id) {
      setInitialValues(singleLevel)
    }
  }, [singleLevel])

  //get groupes and departments data
  useEffect(() => {
      dispatch(getGroupe({sort : {_id : -1}}))
      dispatch(getDepartment({sort : {_id : -1}}))
  }, [dispatch])



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
    setEditLevelId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")
  }



  //formik initial
  const [initialValues, setInitialValues] = useState({
    name: "",
      group: "",
      department: "",
      position: "",
  })



  //initial yup Scheme
   const LevelAddValidator = yup.object().shape({
    name: yup.string().required(t("name field is required")),
    group: yup.string().required(t("group field is required")) ,//.min(1, t("group field is required")),
    department: yup.string().required(t("department field is required")) ,//.min(1, t("department field is required")),
    position: yup.number().required(t("position field is required")).min(1, t("position field is required")),
  })



  //submit form 
  const onSubmit = values => {
    if (editLevelId && editLevelId !== "") {//if edit  
      dispatch(editLevel(values))
    } else {//if add
      dispatch(createLevel(values))

    }
  }



  return (
    <div className="tab-pane" id="Level-add">

       {loading && loader()}


      {
        <Formik
          initialValues={initialValues || singleLevel}
          onSubmit={onSubmit}
          validationSchema={LevelAddValidator}
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
                            <Field type="text" name="name" className="form-control" placeholder={t("Enter your Name")} />
                            {touched.name && errors.name && <small className="text-danger">{errors.name}</small>}
                          </div>

                        </div>
   

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Department")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="department">
                              <option value="">{t("Select...")}</option>
                              
                              {departments && departments.length > 0 && departments.map((d , di) => {
                                return <option key={di} value={d._id}>{d.departmentName}</option>
                              })}
                             

                            </Field>
                            {touched.department && errors.department && <small className="text-danger">{errors.department}</small>}

                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Position")} <span className="text-danger">*</span></label>

                          <div className="col-md-9">
                            <Field type="number" name="position" className="form-control" placeholder={t("Enter your Position")} />
                            {touched.position && errors.position && <small className="text-danger">{errors.position}</small>}
                          </div>


                        </div>



                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Group")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="group">
                              <option value="">{t("Select...")}</option>

                              {groupes && groupes.length > 0 && groupes.map((g , gi) => {
                                return <option key={gi} value={g._id}>{g.name}</option>
                              })}
                             
                            </Field>
                            {touched.group && errors.group && <small className="text-danger">{errors.group}</small>}

                          </div>
                        </div>

                  

                         <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary" disabled={(loading || !isValid)} >{t("Submit")}</button>
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