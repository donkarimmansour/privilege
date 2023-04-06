import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { cleanAlerts as cleanStudentsAlerts } from '../../redux/students/reducer';
import { cleanAlerts,cleanSingle } from '../../redux/blocks/reducer';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { createBlock, editBlock, getSingleBlock } from '../../redux/blocks/action';
import { getStudent } from '../../redux/students/action';

const Add = ({editBlockId ,  setEditBlockId}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singleBlock } = useSelector(state => state.blocks)
  const { students, loading: loadingStud, error: errorStud } = useSelector(state => state.students)
  const { user } = useSelector(state => state.auth)
  const cancelBtnRef = useRef()

  //get block data 
  useEffect(() => {
    if (editBlockId && editBlockId !== "") {
      dispatch(getSingleBlock({ filter: { _id: editBlockId } }))
    }
  }, [editBlockId])  

   //update block data
   useEffect(() => {
    if (singleBlock && singleBlock._id) {
      setInitialValues(singleBlock)
    }
  }, [singleBlock])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

      //clear form
      OnCancel({target: cancelBtnRef?.current})

    } else if (error || errorStud) {
      swal(t("Error"), t(checkString(error || errorStud)), "error");
    }

    dispatch(cleanAlerts())

    if (success || error) {
      dispatch(cleanAlerts())
    } else if (errorStud) {
      dispatch(cleanStudentsAlerts())
    }

  }, [success, error, errorStud]);

 

  //back to list
  const OnCancel = (evt) => {
    setEditBlockId("")
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
  })

 
  const onSubmit = values => {

    const actions = {
      fullName: `${user.firstname} ${user.lastname}`,
      action: `${editBlockId && editBlockId !== "" ? "edit" : "add"}`,
      role: `${user.role}`
    }

    if (editBlockId && editBlockId !== "") {//if edit  
      dispatch(editBlock({...values, actions }))
    } else {//if add
      dispatch(createBlock({...values, actions }))
 
    }
  }

  const BlocksValidator = yup.object().shape({
    studentID: yup.string().required(t("Student Name field is required")),
  })

  const filterBy = () => true
  
  //get Students
  const handleSearch = (query) => {
    dispatch(getStudent({
      sort: { _id: -1 }, filter: {
        $or: [
          { firstname: { $regex: query, $options: "i" } },
          { lastname: { $regex: query, $options: "i" } },
          { username: { $regex: query, $options: "i" } }
        ]
      }
    }))
  }


  return (
    <div className="tab-pane" id="block-add">

      {(loading || loadingStud) && loader()}


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={BlocksValidator}
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
                          <label className="col-md-3 col-form-label">{t("Student Name")}  <span className="text-danger">*</span></label>
                          <div className="col-md-9">

                            <AsyncTypeahead id="studentID"
                              caseSensitive={false}
                              filterBy={filterBy}
                              onChange={selected => {
                                setFieldTouched("studentID")
                                setFieldValue("studentID", selected[0]?._id)
                              }}
                              labelKey={(option) => `${option.firstname} ${option.lastname} (${option.username})`}
                              minLength={1}
                              size={"lg"}
                              options={students}
                              placeholder={t("Select...")}
                              isLoading={loadingStud}
                              onSearch={handleSearch}
                              renderMenuItemChildren={(option) => (
                                <p key={option._id}>{`${option.firstname} ${option.lastname} (${option.username})`}</p>
                              )}
                            />

                            {touched.studentID && errors.studentID && <small className="text-danger">{t(errors.studentID)}</small>}

                          </div>
                        </div>




                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Description")}</label>
                          <div className="col-md-9">
                            <Field as='textarea' row="5" name="description" className="form-control" placeholder={t("Description")} />
                            {touched.description && errors.description && <small className="text-danger">{t(errors.description)}</small>}
                          </div>
                        </div>

              

                        <div className="form-group row">
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