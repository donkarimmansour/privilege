import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { checkRole, checkString, loader } from '../../common/funs';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/languages/reducer';
import Container from '../shared/Container'
import { Navigate, useParams } from 'react-router';
import moment from 'moment';
import { getSinglePayment } from '../../redux/payments/action';
import { useReactToPrint } from "react-to-print";

const Invice = () => {

    const links = [
        { name: "Ericsson", url: "#" },
        { name: "Payment", url: "#" },
        { name: "Invice", url: "#" }
    ]

    const tabs = []

    const { t } = useTranslation();
    const dispatch = useDispatch()
    const params = useParams()
    const InviceRef = useRef()
    const { loading, error, success, singlePayment } = useSelector(state => state.payments)
    const { user, isLoggedIn } = useSelector(state => state.auth)

    //get Language data
    useEffect(() => {
        if (isLoggedIn && params && params.id && params.id !== "") {
            dispatch(getSinglePayment({ filter: { _id: params.id }, expend: "studentID" }))
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
                        {singlePayment && singlePayment._id &&
                            <>

                                <div className="card-header">
                                    <h3 className="card-title">#{singlePayment._id}</h3>
                                    <div className="card-options">
                                        <button type="button" className="btn btn-primary" onClick={printInvice}>
                                            <i className="si si-printer" /> {t("Print Invoice")}
                                        </button>
                                    </div>
                                </div>
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
                                            {`${singlePayment?.studentID?.firstname} ${singlePayment?.studentID?.lastname}`}
                                            <br />
                                            {singlePayment?.studentID?.email}
                                            <br />
                                            {moment(singlePayment.updatedAt).format("DD/MM/YYYY")}
    
                                            </address>
                                        </div>
                                    </div>
                                    <div className="table-responsive push">
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <tbody>
                                                <tr>
                                                    <th>{t("Type & Method")}</th>
                                                    <th className="text-center">{t("Reference")}</th>
                                                    <th className="text-right">{t("Details")}</th>
                                                    <th className="text-right">{t("Amount")}</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="font600 mb-1">{singlePayment.feesType}</p>
                                                        <div className="text-muted">{singlePayment.paymentMethod}</div>
                                                    </td>
                                                    <td className="text-right">{singlePayment.paymentReference}</td>
                                                    <td className="text-center">{singlePayment.paymentDetails}</td>
                                                    <td className="text-right">{singlePayment.amount}</td>
                                                </tr>
                                              
                                               <tr>
                                                    <td colSpan={3} className="font600 text-right">{t('Subtotal')}</td>
                                                    <td className="text-right">{singlePayment.amount}</td>
                                                </tr>
                                                <tr className="bg-light">
                                                    <td colSpan={3} className="font600 text-right">{t('Vat Rate')}</td>
                                                    <td className="text-right">0%</td>
                                                </tr>
                                             
                                                <tr className="bg-green text-light">
                                                    <td colSpan={3} className="font700 text-right">{t('Total Due')}</td>
                                                    <td className="font700 text-right">{singlePayment.amount}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-muted text-center">
                                        {t('Thank you very much for doing business with us. We look forward to working with you again!')}
                                    </p>
                                </div>

                            </>

                        }

                    </div>


                </Container>

                : <Navigate to="/profile" />}
        </>
    )

}

export default Invice