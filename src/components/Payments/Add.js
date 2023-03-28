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
import { getSingleBill } from '../../redux/bills/action';

const Add = ({ _editPaymentId, _setEditPaymentId }) => {


  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success, singlePayment } = useSelector(state => state.payments)
  const { students, loading: loadingStud, error: errorStud, success: successStud } = useSelector(state => state.students)
  const { user } = useSelector(state => state.auth)
  const [studentFilter, setStudentFilter] = useState(null)
  const { singleBill } = useSelector(state => state.bills)
  const [sessionAmount, setSessionAmount] = useState(0)//

  // //get payment data
  // useEffect(() => {
  //   if (editPaymentId && editPaymentId !== "") {
  //     dispatch(getSinglePayment({ filter: { _id: editPaymentId } }))
  //   }
  // }, [editPaymentId])


  //update payment data
  useEffect(() => {
    if (singlePayment && singlePayment._id) {
      setInitialValues(singlePayment)
    }
  }, [singlePayment])

  //get Students
  useEffect(() => {
    dispatch(getStudent({ sort: { _id: -1 } }))
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

  //get amount data
  useEffect(() => {
    if (studentFilter && studentFilter.length > 10) {
      dispatch(getSingleBill({ sort: { _id: -1 }, filter: { studentID: studentFilter } }))
    }
  }, [studentFilter])

  //update student amount
  useEffect(() => {
    setSessionAmount(singleBill?.amount || 0)
  }, [singleBill])




  //back to list
  const OnCancel = (evt) => {
    //  setEditPaymentId("")
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
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
    paymentMethod: "",
    amount: 0,
    paymentDetails: "",
    paymentReference: "",
  })



  //initial yup Scheme
  const PaymentAddValidator = yup.object().shape({
    studentID: yup.string().required(t("Student Name field is required")),
    paymentMethod: yup.string().required(t("Payment Method field is required")),
    feesType: yup.string().required(t("fees Type field is required")),
    amount: yup.number().required(t("Amount field is required"))//.min(1, t("Amount field is required")),
  })

  //submit form
  const onSubmit = values => {

    if (values.amount <= sessionAmount) {
      const actions = {
        fullName: `${user.firstname} ${user.lastname}`,
        action: `add`,
        role: `${user.role}`
      }

      // if (editPaymentId && editPaymentId !== "") {//if edit  
      //   dispatch(editPayment({ ...values, actions }))
      // } else {//if add
      dispatch(createPayment({ ...values, actions }))
      // }
    }

  }

  const filterBy = () => true


  return (
    <div className="tab-pane" id="fees-add">


      {(loading || loadingStud) && loader()}


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
                            setFieldValue("studentID", selected[0]?._id || "")
                            setStudentFilter(selected[0]?._id || "")
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
                    <label className="col-md-3 col-form-label">{t("Fees Type")} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="feesType">
                        <option value="">{t("Select..")}.</option>
                        <option value="language">{t('Language')}</option>
                        <option value="book">{t('Book')}</option>
                      </Field>
                      {touched.feesType && errors.feesType && <small className="text-danger">{errors.feesType}</small>}

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
                    <label className="col-md-3 col-form-label">{`${t('Amount')} (${sessionAmount})`} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field name="amount" type="number" className="form-control" placeholder={`${t('Amount')} (${sessionAmount})`} />
                      {touched.amount && errors.amount && <small className="text-danger">{errors.amount}</small>}
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
                      <Field as="textarea" name="paymentDetails" rows={4} className="form-control no-resize" placeholder={t("Please type what you want...")} />
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