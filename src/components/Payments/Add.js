import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"; 
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/payments/reducer';
import { createPayment, editPayment, getSinglePayment } from '../../redux/payments/action';
import { getStudent } from '../../redux/students/action';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Add = ({ editPaymentId , setEditPaymentId}) => {

 
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singlePayment } = useSelector(state => state.payments)
  const { students, loading: loadingStud, error: errorStud, success: successStud } = useSelector(state => state.students)

  //get payment data
  useEffect(() => {
    if (editPaymentId && editPaymentId !== "") {
      dispatch(getSinglePayment({ filter: { _id: editPaymentId } }))
    }
  }, [editPaymentId])

  
  //update payment data
  useEffect(() => {
    if (singlePayment && singlePayment._id) {
      setInitialValues(singlePayment)
    }
  }, [singlePayment])

  //get Students
  useEffect(() => {
    dispatch(getStudent({ sort: { _id: -1 }}))
  }, [dispatch])

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


  //back to list
  const OnCancel = (evt) => {
    setEditPaymentId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")
  }



  //alerts
  useEffect(() => {
    if (success || successStud) {
      swal(t("Success"), t(checkString(success || successStud)), "success");

    } else if (error || errorStud) {
      swal(t("Error"), t(checkString(error || errorStud)), "error");
    }

     dispatch(cleanAlerts())

  }, [success, successStud, error, errorStud]);


  //formik initial
  const [initialValues, setInitialValues] = useState({
      studentID: "",
      feesType: "",
      paymentDetails: "",
      paymentMethod: "",
      paymentReference: "",
      paymentStatus: "",
      paymentDuration: "",
      amount : 0 ,
      pending : 0 ,
  })



  //initial yup Scheme
  const PaymentAddValidator = yup.object().shape({
    studentID: yup.string().required(t("Student Name field is required")),
    paymentStatus: yup.string().required(t("Payment Status field is required")),
    paymentMethod: yup.string().required(t("Payment Method field is required")),
    paymentDuration: yup.string().required(t("Payment Duration field is required")),
    pending: yup.number().required(t("pending Duration field is required")) ,//.min(1, t("pending field is required")),
    amount: yup.number().required(t("Amount field is required")).min(1, t("Amount field is required")),
  })

  //submit form
  const onSubmit = values => {

    if (editPaymentId && editPaymentId !== "") {//if edit  
      dispatch(editPayment(values))
    } else {//if add
      dispatch(createPayment(values))
    }

  }

  const filterBy = () => true


  return (
    <div className="tab-pane" id="Fees-add">


       {loading && loader()}


      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{t("Add Library")}</h3>
          <div className="card-options ">
            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
          </div>
        </div>



        {
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={PaymentAddValidator}
            enableReinitialize={true}>

            {
              ({ touched, errors, isValid, setFieldValue, setFieldTouched, values }) => (

                <Form action="#" method="post" className="card-body">

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Student Name")}  <span className="text-danger">*</span></label>
                    <div className="col-md-7">
    
                      {students && students.length &&

                        <AsyncTypeahead id="studentID"
                          caseSensitive={false}
                          filterBy={filterBy}
                          onChange={selected => {
                            setFieldTouched("studentID")
                            setFieldValue("studentID", selected[0]?._id || "" )
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
                      }
                       {touched.studentID && errors.studentID && <small className="text-danger">{errors.studentID}</small>} 


                    </div>
                  </div>
 
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Fees Type")} </label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="feesType">
                        <option value="">{t("Select..")}.</option>
                        <option value="language">Language</option>
                        <option value="book">Book</option>
                      </Field>
                      {touched.feesType && errors.feesType && <small className="text-danger">{errors.feesType}</small>}

                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Payment Duration")} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <div className="custom-controls-stacked">
                

                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="book" />
                          <span className="custom-control-label">{t("Book")}</span>
                        </label>

                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="hours" />
                          <span className="custom-control-label">{t("Hours")}</span>
                        </label>

                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="no" />
                          <span className="custom-control-label">{t("No")}</span>
                        </label>


                      </div>
                   
                      {touched.paymentDuration && errors.paymentDuration && <small className="text-danger">{errors.paymentDuration}</small>}

                    </div>
                  </div>
 

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Payment Method')} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="paymentMethod">
                        <option value>{t("Select...")}</option>
                        <option value="cash">{t('Cash')}</option>
                        <option value="cheque">{t('Cheque')}</option>
                        <option value="card">{t('Card')}</option>
                        <option value="other">{t('Other')}</option>
                      </Field>
                      {touched.paymentMethod && errors.paymentMethod && <small className="text-danger">{errors.paymentMethod}</small>}

                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Payment Status')} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="paymentStatus">
                        <option value>{t("Select...")}</option>
                        <option value="paid">{t('Paid')}</option>
                        <option value="pending">{t('Pending')}</option>
                      </Field>
                      {touched.paymentStatus && errors.paymentStatus && <small className="text-danger">{errors.paymentStatus}</small>}

                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Amount')}</label>
                    <div className="col-md-7">
                      <Field name="amount" type="number" className="form-control" placeholder={t('Amount')} />
                      {touched.amount && errors.amount && <small className="text-danger">{errors.amount}</small>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Pending')}</label>
                    <div className="col-md-7">
                      <Field name="pending" type="number" className="form-control" placeholder={t('Pending')} />
                      {touched.pending && errors.pending && <small className="text-danger">{errors.pending}</small>}

                    </div>
                  </div>



                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Payment Reference')}</label>
                    <div className="col-md-7">
                      <Field name="paymentReference" type="text" className="form-control" placeholder={t('Payment Reference')} />
                      {touched.paymentReference && errors.paymentReference && <small className="text-danger">{errors.paymentReference}</small>}

                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Payment Details")}</label>
                    <div className="col-md-7">
                      <Field as="textarea" name="paymentDetails" rows={4} className="form-control no-resize" placeholder={t("Please type what you want...")}  />
                      {touched.paymentDetails && errors.paymentDetails && <small className="text-danger">{errors.paymentDetails}</small>}
                    </div>


                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label" />
                    <div className="col-md-7">
                    <button type="submit" className="btn btn-primary" disabled={(loading || !isValid)}>{t("Submit")}</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={(e) => { OnCancel(e) }}>{t("Cancel")}</button>
                    </div>
                  </div>



                </Form>

              )

            }</Formik>
        }


      </div>
    </div>

  )

}

export default Add