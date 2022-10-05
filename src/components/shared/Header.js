import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
    const { t, i18n } = useTranslation();

    console.log(i18n.language);
    //i18n.changeLanguage("fr")

    //  const dispatch = useDispatch()
    const { loading, error, success, notifications, count } = useSelector(state => state.notifications)

    useEffect(() => {
        if (success) {

        } else if (error) {

        }
    }, [success, error]);


    const data = [
        {
            message: "Campaign is nearly reach budget limit.",
            type: "Holiday"
        },
        {
            message: "Campaign is nearly reach budget limit.",
            type: "Holiday"
        },
        {
            message: "Campaign is nearly reach budget limit.",
            type: "Holiday"
        },
        {
            message: "Campaign is nearly reach budget limit.",
            type: "Holiday"
        },


    ]




    return (
        // <!-- Start Page header -->
        <div className="section-body" id="page_top">
            <div className="container-fluid">
                <div className="page-header">

                    <div className="left"></div>

                    <div className="right">


                        <div className="notification d-flex">
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-language"></i></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#en" onClick={() => { i18n.changeLanguage("en") }}><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="" />{t("English")}</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#fr" onClick={() => { i18n.changeLanguage("fr") }}><img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt="" />{t("France")}</a>
                                </div>

                            </div>



                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-primary nav-unread"></span></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <ul className="list-unstyled feeds_widget">



                                        {data.length > 0 && data.map((n, ni) => {
                                            return (
                                                <li key={ni}>

                                                    <div className="feeds-left">
                                                        <span className="avatar avatar-blue"><i className="fa fa-check"></i></span>
                                                    </div>
                                                    <div className="feeds-body ml-3">
                                                        <p className="text-muted mb-0">{n.message} {n.type && <strong className="text-blue font-weight-bold">{n.type}</strong>}.</p>
                                                    </div>



                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            </div>
                            <div className="dropdown d-flex">
                                <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                    <span className="avatar" style={{ backgroundImage: "url(../assets/images/xs/avatar5.jpg)" }}></span> karim</a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <Link className="dropdown-item" to="/profile"><i className="dropdown-icon fe fe-user"></i> {t("Profile")}</Link>
                                    <Link className="dropdown-item" to="/settings"><i className="dropdown-icon fe fe-settings"></i> {t("Settings")}</Link>
                                    <Link className="dropdown-item" to="/chatapp"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail"></i> {t("Inbox")}</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/login.html"><i className="dropdown-icon fe fe-log-out"></i> {t("Sign out")}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header