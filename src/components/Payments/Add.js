import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/payments/reducer';
import { cleanAlerts as cleanLibraryAlerts } from '../../redux/library/reducer';
import { cleanAlerts as cleanStudentsAlerts } from '../../redux/students/reducer';
import { cleanAlerts as cleanBillsAlerts } from '../../redux/bills/reducer';
import { createPayment } from '../../redux/payments/action';
import { getStudent } from '../../redux/students/action';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getSingleBill } from '../../redux/bills/action';
import { getLibrary } from '../../redux/library/action';

const Add = () => {


  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { loading, error, success } = useSelector(state => state.payments)
  const { students, loading: loadingStud, error: errorStud } = useSelector(state => state.students)
  const { libraries, loading: loadingBK, error: errorBK} = useSelector(state => state.library)
  const { singleBill, loading: loadingBL, error: errorBL  } = useSelector(state => state.bills)
  const { user } = useSelector(state => state.auth)
  const [studentFilter, setStudentFilter] = useState(null)
  const [amount, setAmount] = useState(0)
  const [feesType, setFeesType] = useState("")
  const paymentValues = useRef()

  

  //yup Scheme
  const [initialScheme, setInitialScheme] = useState({
    studentID: yup.string().required(t("Student Name field is required")),
    paymentMethod: yup.string().required(t("Payment Method field is required")),
    feesType: yup.string().required(t("fees Type field is required")),
    amount: yup.number().required(t("Amount field is required"))//.min(1, t("Amount field is required")),
  })


  //formik initial
  const [initialValues, setInitialValues] = useState({
    studentID: "",
    feesType: "",
    paymentMethod: "",
    amount: 0,
    paymentDetails: "",
    paymentReference: ""
  })


  //initial yup Scheme
  useEffect(() => {

    setAmount(0)

    if (feesType === "language") {
      delete initialScheme.book
      delete initialScheme.bookType
      delete paymentValues.current.values.book
      delete paymentValues.current.values.bookType

      setInitialValues({ ...paymentValues.current.values })
      setInitialScheme({ ...initialScheme })

      if (studentFilter && studentFilter.length > 10) {
        dispatch(getSingleBill({ sort: { _id: -1 }, filter: { studentID: studentFilter } }))
      }

    } else if (feesType === "book") {
      setInitialValues({ ...paymentValues.current.values, book: "" })
      setInitialValues({ ...paymentValues.current.values, bookType: "" })
      setInitialScheme({ ...initialScheme, book: yup.string().required(t("book field is required")) })
      setInitialScheme({ ...initialScheme, bookType: yup.string().required(t("book Type field is required")) })
    }

  }, [feesType])

  //get amount data
  useEffect(() => {
    if (studentFilter && studentFilter.length > 10 && feesType === "language") {
      dispatch(getSingleBill({ sort: { _id: -1 }, filter: { studentID: studentFilter } }))
    }
  }, [studentFilter])

    //update student amount
    useEffect(() => {
      setAmount(singleBill?.amount || 0)
    }, [singleBill])
  



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

  //get books
  const handleBookSearch = (query) => {
    dispatch(getLibrary({ sort: { _id: -1 }, filter: { title: { $regex: query, $options: "i" } } }))
  }



  //back to list
  const OnCancel = (evt) => {
    evt.target.closest(".tab-pane").classList.remove("active")
    evt.target.closest(".tab-content").children[0].classList.add("active")

    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[1].classList.remove("active")
    document.querySelectorAll(".page .nav-tabs .nav-item .nav-link")[0].classList.add("active")
  }


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error || errorStud || errorBK || errorBL) {
      swal(t("Error"), t(checkString(error || errorStud || errorBK || errorBL)), "error");
    }

    if (success || error) {
      dispatch(cleanAlerts())
    } else if (errorBK) {
      dispatch(cleanLibraryAlerts())

    } else if (errorStud) {
      dispatch(cleanStudentsAlerts())

    } else if (errorBL) {
      dispatch(cleanBillsAlerts())
      setAmount(0)
    }
      

  }, [success, error, errorStud, errorBK, errorBL]);




  //initial yup Scheme
  const PaymentAddValidator = yup.object().shape(initialScheme)

  //submit form
  const onSubmit = values => {

    if (values.amount <= amount) {
      const actions = {
        fullName: `${user.firstname} ${user.lastname}`,
        action: `add`,
        role: `${user.role}`
      }

      dispatch(createPayment({ ...values, actions }))
    }

  }

  const filterBy = () => true


  return (
    <div className="tab-pane" id="fees-add">


      {(loading || loadingBK || loadingBL || loadingStud) && loader()}


      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{t("Basic Information")}</h3>
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
            enableReinitialize={true}
            innerRef={paymentValues}>

            {
              ({ touched, errors, isValid, setFieldValue, setFieldTouched, values }) => (

                <Form action="#" method="post" className="card-body">

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Student Name")}  <span className="text-danger">*</span></label>
                    <div className="col-md-9">

                      <AsyncTypeahead id="studentID"
                        caseSensitive={false}
                        filterBy={filterBy}
                        onChange={selected => {
                          setFieldTouched("studentID")
                          setFieldValue("studentID", selected[0]?._id)
                          setStudentFilter(selected[0]?._id)
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
                    <label className="col-md-3 col-form-label">{t("Fees Type")} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="feesType" values={values.feesType}
                        onChange={val => {
                          setFieldTouched("feesType")
                          setFieldValue("feesType", val.target.value)
                          setFeesType(val.target.value)
                        }}>
                        <option value="">{t("Select..")}.</option>
                        <option value="language">{t('Language')}</option>
                        <option value="book">{t('Book')}</option>
                      </Field>
                      {touched.feesType && errors.feesType && <small className="text-danger">{t(errors.feesType)}</small>}

                    </div>
                  </div>

                  {feesType === "book" &&
                    <>

                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">{t("Book")}  <span className="text-danger">*</span></label>
                        <div className="col-md-9">

                          <AsyncTypeahead id="book"
                            caseSensitive={false}
                            filterBy={filterBy}
                            onChange={selected => {
                              setFieldTouched("book")
                              setFieldValue("book", selected[0]?._id || "")

                              console.log(selected[0]?.blackAndWhitePrice);

                              if(values?.bookType === "colorPrice"){
                                setAmount(selected[0]?.colorPrice)
                              }else if(values?.bookType === "blackAndWhitePrice"){
                                setAmount(selected[0]?.blackAndWhitePrice)
                              }
 
                            }}
                            labelKey={(option) => option.title}
                            minLength={1}
                            size={"lg"}
                            options={libraries}
                            placeholder={t("Select...")}
                            isLoading={loadingBK}
                            onSearch={handleBookSearch}
                            renderMenuItemChildren={(option) => (
                              <p key={option._id}>{option.title}</p>
                            )}
                          />

                          {touched.book && errors.book && <small className="text-danger">{t(errors.book)}</small>}

                        </div>
                      </div>


                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">{t("Book Type")} <span className="text-danger">*</span></label>
                        <div className="col-md-7">
                          <Field as="select" className="form-control" name="bookType" values={values.bookType}
                            onChange={val => {
                              setFieldTouched("bookType")
                              setFieldValue("bookType", val.target.value)

                              const book = libraries.find(l => l._id === values?.book)

                              if(book && val.target.value === "colorPrice"){
                                setAmount(book.colorPrice)
                              }else if(book && val.target.value === "blackAndWhitePrice"){
                                setAmount(book.blackAndWhitePrice)
                              }

                            }}>
                            <option value="">{t("Select..")}.</option>
                            <option value="colorPrice">{t('Color Price')}</option>
                            <option value="blackAndWhitePrice">{t('Black And White Price')}</option>
                          </Field>
                          {touched.bookType && errors.bookType && <small className="text-danger">{t(errors.bookType)}</small>}

                        </div>
                      </div>


                    </>

                  }



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
                      {touched.paymentMethod && errors.paymentMethod && <small className="text-danger">{t(errors.paymentMethod)}</small>}

                    </div>
                  </div>



                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{`${t('Amount')} (${amount})`} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field name="amount" type="number" className="form-control" placeholder={`${t('Amount')} (${amount})`} />
                      {touched.amount && errors.amount && <small className="text-danger">{t(errors.amount)}</small>}
                    </div>
                  </div>


                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Payment Reference')}</label>
                    <div className="col-md-7">
                      <Field name="paymentReference" type="text" className="form-control" placeholder={t('Payment Reference')} />
                      {touched.paymentReference && errors.paymentReference && <small className="text-danger">{t(errors.paymentReference)}</small>}

                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Payment Details")}</label>
                    <div className="col-md-7">
                      <Field as="textarea" name="paymentDetails" rows={4} className="form-control no-resize" placeholder={t("Please type what you want...")} />
                      {touched.paymentDetails && errors.paymentDetails && <small className="text-danger">{t(errors.paymentDetails)}</small>}
                    </div>


                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label" />
                    <div className="col-md-7">
                      <button type="submit" className="btn btn-primary mr-3" disabled={(loading || !isValid)}>{t("Submit")}</button>
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