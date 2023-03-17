import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'; 
import { Field, Formik, Form } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import myClassnames from 'classnames';
import { checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { createProfessor, editProfessor, editProfessorImage, getSingleProfessor } from '../../redux/professors/action';
import { cleanAlerts } from '../../redux/professors/reducer';
import { CreateSingleFile } from '../../api/file';
import { getCourse } from '../../redux/courses/action';

const Add = ({ editProfessorId, setEditProfessorId }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch()
    const { loading, error, success, singleProfessor } = useSelector(state => state.professors)
    const { token } = useSelector(state => state.auth)
    const { courses } = useSelector(state => state.courses)

    const [generateData, setGenerateData] = useState({})
    const [Lloading, setLLoading] = useState(false)
    const [profileImage, setProfileImage] = useState(null)

    //yup Scheme 
    const [initialScheme, setInitialScheme] = useState({
        isAccountActivated: yup.string().required(t("type is required")),
        firstname: yup.string().required(t("firstname field is required")),
        lastname: yup.string().required(t("lastname field is required")),
        //gender: yup.string().oneOf(["male", "female"], t("you must select male or female")),
        gender: yup.string().required(t("you must select male or female")),
        phone: yup.string().required(t("phone field is required")),
        birthday: yup.string().required(t("birthday field is required")),
        teach: yup.string().required(t("teach field is required")),
        username: yup.string().required(t("username field is required")),
        email: yup.string().required(t("email field is required")).email("email must be email"),
        password: yup.string().required(t("password field is required")),
        confirmpassword: yup.string().required(t("confirm password field is required"))
            .test("confirmpassword", t("confirm password must be the same as password")
                , function (value) {
                    return this.parent.password === value
                }),
    })


    //formik initial
    const [initialValues, setInitialValues] = useState({
        birthday: new Date(),
        firstname: "",
        lastname: "",
        gender: "",
        phone: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        note: "",
        website: "",
        teach: "",
        isAccountActivated: "no",
    })


    //alerts
    useEffect(() => {
        if (success) {
            swal(t("Success"), t(checkString(success)), "success");

        } else if (error) {
            swal(t("Error"), t(checkString(error)), "error");
        }

        dispatch(cleanAlerts())

    }, [success, error]);


    //get Professor data
    useEffect(() => {
        if (editProfessorId && editProfessorId !== "") {
            dispatch(getSingleProfessor({ filter: { _id: editProfessorId } }))
        }
    }, [editProfessorId])


    //update Professor data
    useEffect(() => {
        if (singleProfessor && singleProfessor._id) {

            setInitialValues(singleProfessor)
            setProfileImage(singleProfessor.image)
            delete initialScheme.password
            delete initialScheme.confirmpassword
            setInitialScheme({ ...initialScheme })
        }
    }, [singleProfessor])

    //get classes data
    useEffect(() => {
        dispatch(getCourse({ sort: { _id: -1 } }))
    }, [dispatch])

    //back to list
    const OnCancel = (evt) => {
        setEditProfessorId("")
        evt.target.closest(".tab-pane").classList.remove("active")
        evt.target.closest(".tab-content").children[0].classList.add("active")
    }



    //check for Generate username and password
    const canGenerate = () => {
        return generateData && generateData.firstname && generateData.lastname && generateData.firstname !== "" && generateData.lastname !== ""
    }

    //Generate username and password
    const Generate = () => {
        setInitialValues({
            ...generateData, username: `${generateData.firstname}-${generateData.lastname}`,
            confirmpassword: `${generateData.firstname}-${generateData.lastname}-123`,
            password: `${generateData.firstname}-${generateData.lastname}-123`
        })


        delete initialScheme.username
        delete initialScheme.password
        delete initialScheme.confirmpassword
        setInitialScheme({ ...initialScheme })


    }

    //submit form
    const onSubmit = values => {

        if (editProfessorId && editProfessorId !== "") {//if edit  
            dispatch(editProfessor({ ...values, image: profileImage }))

        } else {//if add
            if (!profileImage) {
                dispatch(createProfessor({ ...values }))
            } else {
                dispatch(createProfessor({ ...values, image: profileImage }))
            }
        }

    }


    //initial yup Scheme
    const teacherAddValidator = yup.object().shape(initialScheme)

    //upload image
    const uploadImage = (e) => {

        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];


            const formData = new FormData();
            formData.append('image', img);

            setLLoading(true)

            const authorization = { "Authorization": `bearer ${token}` }

            CreateSingleFile(formData, authorization).then(({ data }) => { //add token here
                setLLoading(false)


                setProfileImage(data.msg)

                if (!editProfessorId || editProfessorId === "") {
                    swal(t("Uploaded"), t("Uploaded"), "success");
                } else {
                    dispatch(editProfessorImage({ image: data.msg, type: "" }))
                }


            }).catch(err => {
                console.log("api err ", err.response.data);
                swal(t("Not Updated"), typeof err.response.data.msg == "string" ? t(err.response.data.msg) : t(err.response.data.msg[0]), "error");
                setLLoading(false)
            })


        }
    }


    return (
        <div className="tab-pane" id="pro-add">

            {(loading || Lloading) && loader()}

            {
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={teacherAddValidator}
                    enableReinitialize={true}
                    innerRef={(data) => (data ? setGenerateData(data.values) : setGenerateData({}))} >

                    {
                        ({ touched, errors, setFieldValue, setFieldTouched, values, isValid }) => (

                            <Form action="#" method="post">
                                <div className="row clearfix">

                                    <div className="col-lg-8 col-md-12 col-sm-12  order-lg-1 order-md-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">{t("Basic Information")}</h3>
                                                <div className="card-options ">
                                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="row clearfix">
                                                    <div className="col-md-6 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("First Name")} <span className="text-danger">*</span></label>
                                                            <Field type="text" name="firstname" className="form-control" placeholder={t("Enter your First Name")} />
                                                            {touched.firstname && errors.firstname && <small className="text-danger">{errors.firstname}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("Last Name")} <span className="text-danger">*</span></label>
                                                            <Field type="text" name="lastname" className="form-control" placeholder={t("Enter your Last Name")} />
                                                            {touched.lastname && errors.lastname && <small className="text-danger">{errors.lastname}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("Date of Birth")} </label>

                                                            {/* <Field component={DatePicker} data-provide="datepicker" data-date-autoclose="true" name="birthday" className="form-control" placeholder={t("Enter your Date of Birth")} /> */}
                                                            <DatePicker
                                                                selected={(values.birthday && new Date(values.birthday)) || null}
                                                                onChange={val => {
                                                                    setFieldTouched("birthday")
                                                                    setFieldValue("birthday", val);
                                                                }} className="form-control" placeholder={t("Enter your Date of Birth")} />

                                                            {touched.birthday && errors.birthday && <small className="text-danger">{errors.birthday}</small>}
                                                        </div>

                                                    </div>



                                                    <div className="col-md-3 col-sm-12">
                                                        <label>{t("Gender")} <span className="text-danger">*</span></label>
                                                        <Field as="select" name="gender" className="form-control show-tick">
                                                            <option value="">{t("-- Gender --")}</option>
                                                            <option value="male">{t("Male")}</option>
                                                            <option value="female">{t("Female")}</option>
                                                        </Field>
                                                        {touched.gender && errors.gender && <small className="text-danger">{errors.gender}</small>}

                                                    </div>

                                                    <div className="col-md-6 col-sm-12">

                                                        <div className="form-group">
                                                            <label>{t("Teach")} <span className="text-danger">*</span></label>
                                                            <Field as="select" name="teach" className="form-control show-tick">
                                                                <option value="">{t("Select...")}</option>

                                                                {courses && courses.length > 0 && courses.map((c, ci) => {
                                                                    return <option key={ci} value={c._id}>{c.name}</option>
                                                                })}

                                                            </Field>

                                                            {touched.teach && errors.teach && <small className="text-danger">{errors.teach}</small>}
                                                        </div>

                                                    </div>

                                                    <div className="col-md-4 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Phone")} <span className="text-danger">*</span></label>
                                                            <Field type="text" name="phone" className="form-control" placeholder={t("Enter your Phone")} />
                                                            {touched.phone && errors.phone && <small className="text-danger">{errors.phone}</small>}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4 col-sm-12">
                                                        <div className="form-group">
                                                            <label>{t("Email")} <span className="text-danger">*</span></label>
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

                                                      <div className="form-group row">
                                                        <label className="col-md-3">{t("is Account Activated")} <span className="text-danger">*</span></label>

                                                        <div className="col-md-7">
                                                            <div className="custom-controls-stacked">

                                                                <label className="custom-control custom-radio custom-control-inline">
                                                                    <Field type="radio" className="custom-control-input" name="isAccountActivated" value="yes" />
                                                                    <span className="custom-control-label">{t("Yes")}</span>
                                                                </label>

                                                                <label className="custom-control custom-radio custom-control-inline">
                                                                    <Field type="radio" className="custom-control-input" name="isAccountActivated" value="no" />
                                                                    <span className="custom-control-label">{t("No")}</span>
                                                                </label>


                                                            </div>
                                                        </div>
                                                        {touched.isAccountActivated && errors.isAccountActivated && <small className="text-danger">{errors.isAccountActivated}</small>}

                                                        </div>
                                                    </div>




                                                    <div className="col-md-9 col-sm-12">

                                                        <div className="form-group mt-2 mb-3">
                                                            <input type="file" className="dropify" onChange={(e) => { uploadImage(e) }} />
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
                                                        <button type="submit" className="btn btn-primary" disabled={(loading || !isValid)}>{t("Submit")}</button>
                                                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => { OnCancel(e) }}>{t("Cancel")}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-lg-4 col-md-12 col-sm-12 order-lg-2 order-md-1">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">{t("Account Information")}</h3>
                                                <div className="card-options ">
                                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
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

                                                    <div className={myClassnames("col-sm-12", { "col-md-6": !editProfessorId || editProfessorId === "" })}>
                                                        <div className="form-group">
                                                            <label>{t("Password")} <span className="text-danger">*</span></label>
                                                            <Field type="text" name="password" className="form-control" placeholder={t("Enter your Password")} />
                                                            {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
                                                        </div>
                                                    </div>

                                                    {(!editProfessorId || editProfessorId === "") && <> <div className="col-sm-12 col-md-6" >
                                                        <div className="form-group">
                                                            <label>{t("Confirm Password")} <span className="text-danger">*</span></label>
                                                            <Field type="text" name="confirmpassword" className="form-control" placeholder={t("Enter your Confirm Password")} />
                                                            {touched.confirmpassword && errors.confirmpassword && <small className="text-danger">{errors.confirmpassword}</small>}
                                                        </div>
                                                    </div>

                                                        <div className="col-sm-12">
                                                            <button type="button" className="btn btn-primary" onClick={Generate} disabled={(loading || !canGenerate())}>{t("Generate")}</button>
                                                        </div> </>}


                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">{t("Account Information")}</h3>
                                                <div className="card-options ">
                                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
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
                                                    {touched.twitter && errors.twitter && <small className="text-danger">{errors.twitter}</small>}
                                                </div>

                                                <div className="form-group">
                                                    <label>{t("Linkedin")}</label>
                                                    <Field type="text" name="linkedin" className="form-control" placeholder={t("Enter your Linkedin")} />
                                                    {touched.linkedin && errors.linkedin && <small className="text-danger">{errors.linkedin}</small>}
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