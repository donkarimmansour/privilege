import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { checkRole, extractDesk, ImageVIEW } from '../../common/funs';
import { logOut } from '../../redux/auth/reducer';
import { useNavigate } from 'react-router-dom'
import { getLocalStorage, setLocalStorage } from '../../common/localStorage';
import { getUnReedNotifications } from '../../redux/notifications/action';
import classnames from 'classnames';

const Header = ({refresher , setRefresher}) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const {  unReedNotifications } = useSelector(state => state.notifications)
    const { user, isLoggedIn } = useSelector(state => state.auth)
    const navigate = useNavigate()


    //handle init
    useEffect(() => {
        if(isLoggedIn && user.role === "student") dispatch(getUnReedNotifications({ sort: { _id: -1 }, filter: { studentID: user._id, seen: false} }))
    }, [dispatch, user])


    const logout = () => {
        dispatch(logOut())
        navigate("/login")
    }


    const myChangeLanguage = (lang) => {
        i18n.changeLanguage(lang) 
        setLocalStorage("lang", lang)

        if (lang === "ar") {
             if (!getLocalStorage("RTLSupport") || getLocalStorage("RTLSupport") === "false") {
                 setLocalStorage("RTLSupport", "true")
                 setRefresher(refresher + 1)
             }
         } else {
             if (!getLocalStorage("RTLSupport") || getLocalStorage("RTLSupport") === "true") {
                 setLocalStorage("RTLSupport", "false")
                 setRefresher(refresher + 1)
             }
         }
       
     }


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
                                    <a className="dropdown-item" href="#!" onClick={() => { myChangeLanguage("en") }}><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="" />{t("English")}</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!" onClick={() => { myChangeLanguage("fr") }}><img className="w20 mr-2" src="../assets/images/flags/fr.svg" alt="" />{t("France")}</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!" onClick={() => { myChangeLanguage("ar") }}><img className="w20 mr-2" src="../assets/images/flags/ma.svg" alt="" />{t("Arabic")}</a>
                                </div>

                            </div>


                            {isLoggedIn && checkRole(user.role, "student") &&

                                <div className="dropdown d-flex">
                                    <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-bell"></i><span className={classnames("badge badge-primary", {"nav-unread": unReedNotifications.length > 0})}></span></a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                        <ul className="list-unstyled feeds_widget">

                                            {unReedNotifications.length > 0 && unReedNotifications.map((n, ni) => {
                                                return (
                                                    <li key={ni}>

                                                        <Link to={`/notification/view/${n._id}`}>
                                                            <div className="feeds-body ml-3">
                                                                <p className="text-muted mb-0"><strong className="text-blue font-weight-bold">{n.title}</strong> {extractDesk(n?.message, 50)}</p>
                                                            </div>
                                                        </Link>


                                                    </li>
                                                )
                                            })}

                                        </ul>


                                    </div>
                                </div>
                            }




                            <div className="dropdown d-flex">
                                <a href="#!" className="chip ml-3" data-toggle="dropdown">
                                    <span className="avatar" style={{ backgroundImage: `url(${ImageVIEW(user.image)})` }}></span> karim</a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <Link className="dropdown-item" to="/profile"><i className="dropdown-icon fe fe-user"></i> {t("Profile")}</Link>
                                    { checkRole(user.role, "superAdmin") && <Link className="dropdown-item" to="/settings"><i className="dropdown-icon fe fe-settings"></i> {t("Settings")}</Link> }
                                    {/* <Link className="dropdown-item" to="/notification"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail"></i> {t("Inbox")}</Link> */}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!;" onClick={logout} > <i className="dropdown-icon fe fe-log-out"></i> {t("Sign out")}</a>
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