import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from 'react-dropzone';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Add = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch()
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
        department: 0,
        position: 0,
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        note: "",
        website: "",
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
        department: yup.number().required(t("department field is required")).min(1, t("department field is required")),
        position: yup.number().required(t("position field is required")).min(1, t("position field is required")),
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
        <div className="tab-pane" id="pro-add">
           

                {
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={ProfessorsAddValidator}>

                        {
                            ({ touched, errors  , setFieldValue , values}) => (

                                <Form action="#" method="post">
                                     <div className="row clearfix">

                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Basic Information</h3>
                                                <div className="card-options ">
                                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="row clearfix">
                                                    <div className="col-md-6 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("First Name")}*</label>
                                                            <Field type="text" name="firstname" className="form-control" placeholder={t("Enter your First Name")} />
                                                            {touched.firstname && errors.firstname && <small className="text-danger">{errors.firstname}</small>}
                                                        </div>

                                                    </div>
                                                     <div className="col-md-6 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("Last Name")}*</label>
                                                            <Field type="text" name="lastname" className="form-control" placeholder={t("Enter your Last Name")} />
                                                            {touched.lastname && errors.lastname && <small className="text-danger">{errors.lastname}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("Date of Birth")}*</label>

                                                            <Field component={DatePicker} data-provide="datepicker" data-date-autoclose="true" name="birthday" className="form-control" placeholder={t("Enter your Date of Birth")} />
                                                            {/* <DatePicker
                                                              selected={(values.birthday && new Date(values.birthday)) || null}
                                                                onChange={val => {
                                                                    setFieldValue("birthday", val);
                                                                }} className="form-control" placeholder={t("Enter your Date of Birth")} />
                                                            */}
                                                            {touched.birthday && errors.birthday && <small className="text-danger">{errors.birthday}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <label>{t("Gender")}*</label>
                                                        <Field as="select" name="gender" className="form-control show-tick">
                                                            <option value="">-- Gender --</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </Field>
                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Department")}*</label>
                                                            <Field type="text" name="department" className="form-control" placeholder={t("Enter your Department")} />
                                                            {touched.department && errors.department && <small className="text-danger">{errors.department}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Position")}*</label>
                                                            <Field type="number" name="position" className="form-control" placeholder={t("Enter your Position")} />
                                                            {touched.position && errors.position && <small className="text-danger">{errors.position}</small>}
                                                        </div>


                                                    </div>
                                                    <div className="col-md-4 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Phone")}*</label>
                                                            <Field type="text" name="phone" className="form-control" placeholder={t("Enter your Phone")} />
                                                            {touched.phone && errors.phone && <small className="text-danger">{errors.phone}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Email")}*</label>
                                                            <Field type="text" name="email" className="form-control" placeholder={t("Enter your Email")} />
                                                            {touched.email && errors.email && <small className="text-danger">{errors.email}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Website")}</label>
                                                            <Field type="text" name="website" className="form-control" placeholder={t("Enter your Website")} />
                                                            {touched.website && errors.website && <small className="text-danger">{errors.website}</small>}
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12">

                                                        <div className="form-group mt-2 mb-3">
                                                            <input type="file" className="dropify" onChange={(e) => {}}/>
                                                            <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above Field. It's a bit lighter and easily wraps to a new line.</small>
                                                        </div>

                                                    </div>

                                                    <div className="col-sm-12">

                                                        <div className="form-group mt-3">

                                                            <label>{t("Note")}</label>
                                                            <Field as="textarea" name="note" rows="4" className="form-control no-resize" placeholder={t("Enter your Website")} />
                                                            {touched.note && errors.note && <small className="text-danger">{errors.note}</small>}

                                                        </div>
                                                    </div> 

                                                    <div className="col-sm-12">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                        <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                   
                                   
                                     <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Account Information</h3>
                                                <div className="card-options ">
                                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="row clearfix">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("User Name")}*</label>
                                                            <Field type="text" name="username" className="form-control" placeholder={t("Enter your User Name")} />
                                                            {touched.username && errors.username && <small className="text-danger">{errors.username}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Password")}*</label>
                                                            <Field type="text" name="password" className="form-control" placeholder={t("Enter your Password")} />
                                                            {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Confirm Password")}*</label>
                                                            <Field type="text" name="confirmpassword" className="form-control" placeholder={t("Enter your Confirm Password")} />
                                                            {touched.confirmpassword && errors.confirmpassword && <small className="text-danger">{errors.confirmpassword}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-sm-12">
                                                        <button type="submit" className="btn btn-primary" disabled={(loading)}>Submit</button>
                                                        <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Account Information</h3>
                                                <div className="card-options ">
                                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label>{t("Facebook")}*</label>
                                                    <Field type="text" name="facebook" className="form-control" placeholder={t("Enter your Facebook")} />
                                                    {touched.facebook && errors.facebook && <small className="text-danger">{errors.facebook}</small>}
                                                </div>


                                                <div className="form-group">
                                                    <label>{t("Twitter")}*</label>
                                                    <Field type="text" name="twitter" className="form-control" placeholder={t("Enter your Twitter")} />
                                                    {touched.twitter && errors.Twitter && <small className="text-danger">{errors.Twitter}</small>}
                                                </div>

                                                <div className="form-group">
                                                    <label>{t("Linkedin")}*</label>
                                                    <Field type="text" name="linkedin" className="form-control" placeholder={t("Enter your Linkedin")} />
                                                    {touched.linkedin && errors.linkedin && <small className="text-danger">{errors.linkedin}</small>}
                                                </div>


                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                <button type="submit" className="btn btn-outline-secondary">Cancel</button>
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