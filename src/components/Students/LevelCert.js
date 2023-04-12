import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { checkRole, checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/students/reducer';
import Container from '../shared/Container'
import { Navigate, useParams } from 'react-router';
import moment from 'moment';
import { useReactToPrint } from "react-to-print";
import { getSingleStudent } from '../../redux/students/action';

const LevelCert = () => {

    const { t } = useTranslation();
 
    const links = [
        { name: t("Privilege"), url: "/" },
        { name: t("Students"), url: "/students" },
        { name: t("Level Certificat"), url: "#" }
    ]

    const tabs = []

    const dispatch = useDispatch()
    const params = useParams()
    const InviceRef = useRef()
    const { loading, error, success, singleStudent } = useSelector(state => state.students)
    const { user, isLoggedIn } = useSelector(state => state.auth)


    //get Language data
    useEffect(() => {
        if (isLoggedIn && params && params.id && params.id !== "") {
            dispatch(getSingleStudent({ filter: { _id: params.id }, expend: "all" }))
        }
    }, [params, isLoggedIn])

    //alerts
    useEffect(() => {
        if (success) {
            swal(t("Success"), t(checkString(success)), "success");

        } else if (error) {
            swal(t("Error"), t(checkString(error)), "error");
        }

        dispatch(cleanAlerts())

    }, [success, error]);


   //print Invice
    const printInvice = useReactToPrint({
        content: () => InviceRef.current
    });



    return (
        <>
            {!isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?


                <Container tabs={tabs} links={links}>

                    {loading && loader()}


                    <div className="card" ref={InviceRef}>
                        {singleStudent && singleStudent._id &&
                            <>

                                <div className="card-header">
                                    <h3 className="card-title">#{singleStudent._id}</h3>
                                    <div className="card-options">
                                        <button type="button" className="btn btn-primary" onClick={printInvice}>
                                            <i className="si si-printer" /> {t("Print Invoice")}
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-body">

                                    <div className="row my-8">
                                        <div className="col-6">
                                            <p className="h3">{t('Privilege')}</p>
                                            <address>
                                                Hassan II
                                                <br />
                                                Rabat
                                                <br />
                                                 10000
                                                <br />
                                                contact@privilege.com
                                            </address>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p className="h3">{t('Student')}</p>
                                            <address>
                                            {`${singleStudent?.firstname} ${singleStudent?.lastname}`}
                                            <br />
                                            {singleStudent?.email}
                                            <br />
                                            {singleStudent.gender}
                                            <br />
                                            {moment(new Date()).format("DD/MM/YYYY")}
    
                                            </address>
                                        </div>
                                    </div>
                                   

                                    <div className="table-responsive push">
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <tbody>
                                                <tr>
                                                    <th>{t("Cin")}</th>
                                                    <th className="text-center">{t("Language")}</th>
                                                    <th className="text-right">{t("Level")}</th>
                                                </tr>
                                                <tr>
                                                    <td>{singleStudent.cin}</td>
                                                    <td className="text-center">{singleStudent.language?.name}</td>
                                                    <td className="text-right">{singleStudent.level?.name}</td>
                                                </tr>
                                  

                                            </tbody>
                                        </table>
                                    </div>
                                   
                                    <p className="text-muted text-center">
                                        {t('Thank you very much for doing business with us. We look forward to working with you again!')}
                                    </p>

                                    </div>
                                </div>

                            </>

                        }

                    </div>


                </Container>

                : <Navigate to="/profile" />}
        </>
    )

}

export default LevelCert