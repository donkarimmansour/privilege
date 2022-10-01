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
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    birthday: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    registrationDate : "" ,
    class : "" ,
    group : "" ,
    level : "" ,
  }

  const onSubmit = values => {
    // dispatch(set_contact())
    console.log(values);
  }


  const ProfessorsAddValidator = yup.object().shape({
    firstname: yup.string().required(t("firstname field is required")),
    lastname: yup.string().required(t("lastname field is required")),
    gender: yup.string().oneOf(["male", "female"], t("you must select male or female")),
    phone: yup.string().required(t("phone field is required")),
    birthday: yup.string().required(t("birthday field is required")),
    class: yup.string().required(t("class field is required")),
    level: yup.number().required(t("level field is required")).min(1, t("level field is required")),
    group: yup.number().required(t("group field is required")).min(1, t("group field is required")),
    username: yup.string().required(t("username field is required")),
    email: yup.string().required(t("email field is required")).email("email must be email"),
    password: yup.string().required(t("password field is required")),
    confirmpassword: yup.string().required(t("confirm password field is required"))
      .test("confirmpassword", t("confirm password must be the same as password")
        , function (value) {
          return this.parent.password === value
        }),
  })



  return (
    <div className="tab-pane" id="Student-add">


      {
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ProfessorsAddValidator}>

          {
            ({ touched, errors, setFieldValue, setFieldTouched, values, isValid }) => (

              <Form action="#" method="post">

                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">{t("Basic Information")}</h3>
                        <div className="card-options ">
                          <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                          <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                        </div>
                      </div>
                      <form className="card-body">
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("First Name")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="firstname" className="form-control" placeholder={t("Enter your First Name")} />
                            {touched.firstname && errors.firstname && <small className="text-danger">{errors.firstname}</small>}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Last Name")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="lastname" className="form-control" placeholder={t("Enter your Last Name")} />
                            {touched.lastname && errors.lastname && <small className="text-danger">{errors.lastname}</small>}
                          </div>
                        </div>
                        {/* <div className="form-group row">
                <label className="col-md-3 col-form-label">Roll No <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div> */}
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Email")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="email" className="form-control" placeholder={t("Enter your Email")} />
                            {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Registration Date")} </label>
                          <div className="col-md-9">

                           <DatePicker
                              selected={(values.registrationDate && new Date(values.registrationDate)) || null}
                              onChange={val => {
                                setFieldTouched("registrationDate")
                                setFieldValue("registrationDate", val);
                              }} className="form-control" placeholder={t("Enter your Registration Date")} />

                            {touched.registrationDate && errors.registrationDate && <small className="text-danger">{errors.registrationDate}</small>}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Class")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="class">
                              <option value>{t("Select...")}</option>
                              <option value="Franch">Franch</option>
                              <option value="Germany">Germany</option>
                              <option value="English">English</option>
                            </Field>
                            {touched.class && errors.class && <small className="text-danger">{errors.class}</small>}

                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Group")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="group">
                              <option value>{t("Select...")}</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </Field>
                            {touched.group && errors.group && <small className="text-danger">{errors.group}</small>}

                          </div>
                        </div>


                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Level")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field as="select" className="form-control input-height" name="level">
                              <option value>{t("Select...")}</option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                            </Field>
                            {touched.level && errors.level && <small className="text-danger">{errors.level}</small>}

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
                            {touched.gender && errors.gender && <small className="text-danger">{errors.gender}</small>}

                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Phone")} <span className="text-danger">*</span></label>
                          <div className="col-md-9">
                            <Field type="text" name="phone" className="form-control" placeholder={t("Enter your Phone")} />
                            {touched.phone && errors.phone && <small className="text-danger">{errors.phone}</small>}
                          </div>
                        </div>

    
                        {/* <div className="form-group row">
                <label className="col-md-3 col-form-label">Parents Name <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div> */}
                        {/* <div className="form-group row">
                <label className="col-md-3 col-form-label">Parents Mobile No. <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div> */}
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Date of Birth")}</label>
                          <div className="col-md-9">
                            <DatePicker
                              selected={(values.birthday && new Date(values.birthday)) || null}
                              onChange={val => {
                                setFieldTouched("birthday")
                                setFieldValue("birthday", val);
                              }} className="form-control" placeholder={t("Enter your Date of Birth")} />

                            {touched.birthday && errors.birthday && <small className="text-danger">{errors.birthday}</small>}
                          </div>
                        </div>
                        {/* <div className="form-group row">
                <label className="col-md-3 col-form-label">Address <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div> */}
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">{t("Profile Picture")}</label>
                          <div className="col-md-9">
                            <input type="file" className="dropify" />
                            <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
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
                              <Field type="text" name="username" className="form-control" placeholder={t("Enter your User Name")} />
                              {touched.username && errors.username && <small className="text-danger">{errors.username}</small>}
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>{t("Password")} <span className="text-danger">*</span></label>
                              <Field type="text" name="password" className="form-control" placeholder={t("Enter your Password")} />
                              {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>{t("Confirm Password")} <span className="text-danger">*</span></label>
                              <Field type="text" name="confirmpassword" className="form-control" placeholder={t("Enter your Confirm Password")} />
                              {touched.confirmpassword && errors.confirmpassword && <small className="text-danger">{errors.confirmpassword}</small>}
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary" disabled={(!loading && isValid)}>{t("Submit")}</button>
                            <button type="submit" className="btn btn-outline-secondary">{t("Cancel")}</button>
                          </div>

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
                          <Field type="text" name="facebook" className="form-control" placeholder={t("Enter your Facebook")} />
                          {touched.facebook && errors.facebook && <small className="text-danger">{errors.facebook}</small>}
                        </div>


                        <div className="form-group">
                          <label>{t("Twitter")}</label>
                          <Field type="text" name="twitter" className="form-control" placeholder={t("Enter your Twitter")} />
                          {touched.twitter && errors.Twitter && <small className="text-danger">{errors.Twitter}</small>}
                        </div>

                        <div className="form-group">
                          <label>{t("Linkedin")}</label>
                          <Field type="text" name="linkedin" className="form-control" placeholder={t("Enter your Linkedin")} />
                          {touched.linkedin && errors.linkedin && <small className="text-danger">{errors.linkedin}</small>}
                        </div>
                        {/* <button type="submit" className="btn btn-primary">Submit</button>
              <button type="submit" className="btn btn-outline-secondary">Cancel</button> */}
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