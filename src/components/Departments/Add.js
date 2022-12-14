import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/department/reducer';
import { createDepartment, editDepartment, getSingleDepartment } from '../../redux/department/action';



const Add = ({editDepartmentId ,   setEditDepartmentId}) => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleDepartment } = useSelector(state => state.departments)

  //get department data
  useEffect(() => {
    if (editDepartmentId && editDepartmentId !== "") {
      dispatch(getSingleDepartment({ filter: { _id: editDepartmentId } }))
    }
  }, [editDepartmentId]) 

   //update department data
   useEffect(() => {
    if (singleDepartment && singleDepartment._id) {
      setInitialValues(singleDepartment)
    }
  }, [singleDepartment])



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
    setEditDepartmentId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")
  }


  //formik initial
  const [initialValues, setInitialValues] = useState({
    brief: "",
    headOfDepartment: "",
    departmentName: "",
  })



  //initial yup Scheme
   const departmentAddValidator = yup.object().shape({
     departmentName: yup.string().required(t("Department Name field is required")),
     headOfDepartment: yup.string().required(t("Head of Department field is required")),
  //   // brief: yup.string().required(t("Brief field is required")),
  })


   //submit form 
   const onSubmit = values => {
    if (editDepartmentId && editDepartmentId !== "") {//if edit  
       dispatch(editDepartment(values)) 
    }else{//if add
       dispatch(createDepartment(values)) 

    }
  }



  return (
    <div className="tab-pane" id="Dep-add">
      {loading && loader()}

      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={departmentAddValidator}
          enableReinitialize={true}>

          {
            ({ touched, errors, isValid }) => (

              <Form action="#" method="post" >


                <div className="col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">{t("Department Basic Info")}</h3>
                      <div className="card-options ">
                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row clearfix">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>{t("Department Name")} <span className="text-danger">*</span></label>
                            <Field type="text" name="departmentName" className="form-control" placeholder={t("Department Name")} />
                            {touched.departmentName && errors.departmentName && <small className="text-danger">{errors.departmentName}</small>}

                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>{t("Head of Department")} <span className="text-danger">*</span></label>
                            <Field type="text" name="headOfDepartment" className="form-control" placeholder={t("Head of Department")} />
                            {touched.headOfDepartment && errors.headOfDepartment && <small className="text-danger">{errors.headOfDepartment}</small>}

                          </div>
                        </div>


                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>{t("Brief")}</label>
                            <Field as="textarea" name="brief" rows="4" className="form-control no-resize" placeholder={t("Brief")} />
                            {touched.brief && errors.brief && <small className="text-danger">{errors.brief}</small>}                </div>
                        </div>

                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary" disabled={(loading || !isValid)}>{t("Submit")}</button>
                          <button type="button" className="btn btn-outline-secondary btn-default" onClick={(e) => {OnCancel(e)}}>{t("Cancel")}</button>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>



              </Form>

            )

          }</Formik>
      }




    </div >

  )

}

export default Add