import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Add = () => {

  const { t } = useTranslation();
  //  const dispatch = useDispatch()
  const { loading, error, success } = useSelector(state => state.professors)

  useEffect(() => {
    if (success) {

    } else if (error) {

    }
  }, [success, error]);


  const initialValues = {
    studentID: "",
    feesType: "",
    paymentDetails: "",
    paymentMethod: "",
    paymentReference: "",
    paymentStatus: "",
    paymentDuration: "",
    amount : 0 ,
    pending : 0 ,
  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  } 


  const ProfessorsAddValidator = yup.object().shape({
    studentID: yup.string().required(t("Student Name field is required")),
    paymentStatus: yup.string().required(t("Payment Status field is required")),
    paymentMethod: yup.string().required(t("Payment Method field is required")),
    paymentDuration: yup.string().required(t("Payment Duration field is required")),
    pending: yup.number().required(t("pending Duration field is required")) ,//.min(1, t("pending field is required")),
    amount: yup.number().required(t("Amount field is required")).min(1, t("Amount field is required")),
  })


  return (
    <div className="tab-pane" id="Fees-add">

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
            validationSchema={ProfessorsAddValidator}>

            {
              ({ touched, errors, setFieldValue, setFieldTouched, values, isValid }) => (

                <Form action="#" method="post" className="card-body">



                  {/* <div className="form-group row">
                <label className="col-md-3 col-form-label">Roll No <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <File name="" type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">{t("Student Name")} <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <File name="" type="text" className="form-control" />
                </div>
              </div> */}

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Student Name")}  <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="studentID">
                        <option value>{t("Select...")}</option>
                        <option value="mmm">mmm</option>
                        <option value="lllllllll">lllllllll</option>
                        <option value="rrrrrrrrrrrrrrrr">rrrrrrrrrrrrrrrr</option>
                      </Field>
                      {touched.studentID && errors.studentID && <small className="text-danger">{errors.studentID}</small>}

                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Fees Type")} </label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="feesType">
                        <option value>{t("Select..")}.</option>
                        <option value="Category 3">Center</option>
                        <option value="Category 3">book</option>
                      </Field>
                      {touched.feesType && errors.feesType && <small className="text-danger">{errors.feesType}</small>}

                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t("Payment Duration")} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <div className="custom-controls-stacked">
                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="one"  />
                          <span className="custom-control-label">{t("Monthly")}</span>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="two" />
                          <span className="custom-control-label">{t("Formation")}</span>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="three" />
                          <span className="custom-control-label">{t("Hours")}</span>
                        </label>

                        <label className="custom-control custom-radio custom-control-inline">
                          <Field type="radio" className="custom-control-input" name="paymentDuration" value="four" />
                          <span className="custom-control-label">{t("No")}</span>
                        </label>


                      </div>
                    </div>

                    {touched.paymentDuration && errors.paymentDuration && <small className="text-danger">{errors.paymentDuration}</small>}

                  </div>


                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">{t('Payment Method')} <span className="text-danger">*</span></label>
                    <div className="col-md-7">
                      <Field as="select" className="form-control" name="paymentMethod">
                        <option value>{t("Select...")}</option>
                        <option value="Cash">{t('Cash')}</option>
                        <option value="Cheque">{t('Cheque')}</option>
                        <option value="Card">{t('Card')}</option>
                        <option value="Other">{t('Other')}</option>
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
                      <button type="submit" className="btn btn-primary" disabled={(!loading && isValid)}>{t("Submit")}</button>
                      <button type="submit" className="btn btn-outline-secondary">{t("Cancel")}</button>
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