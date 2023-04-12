import react from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link  } from 'react-router-dom';
import { checkRole } from '../../common/funs';

const LeftSidbar = () => {
    const { t } = useTranslation();
    const {  user } = useSelector(state => state.auth) 

    // User Menu
    const userMenu = (el) => {
        document.querySelector('.metismenu').classList.toggle('grid');
        el.target.classList.toggle('active');
    }


    return  (
        // <!-- Start Main leftbar navigation -->
    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">{t("Privilege")}<a href="#!" className="menu_option float-right" onClick={userMenu}><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>

        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                <nav className="sidebar-nav">
                 <ul className="metismenu"> 
                        { checkRole(user.role, "teacherOradminOrsuperAdmin") && <li className="active"><Link to="/"><i className="fa fa-dashboard"></i><span>{t("Dashboard")}</span></Link></li>}
                        { checkRole(user.role, "superAdmin") && <li><Link to="/admins"><i className="fa fa-lock"></i><span>{t("Admins")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/teachers"><i className="fa fa-black-tie"></i><span>{t("Teachers")}</span></Link></li>}
                        { checkRole(user.role, "teacherOradminOrsuperAdmin") && <li><Link to="/students"><i className="fa fa-user"></i><span>{t("Students")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/archived-students"><i className="icon-user"></i><span>{t("Archived Students")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/departments"><i className="fa fa-building"></i><span>{t("Departments")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/languages"><i className="fa fa-graduation-cap"></i><span>{t("Languages")}</span></Link></li>}                       
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/library"><i className="fa fa-book"></i><span>{t("Books")}</span></Link></li>}
                        {/* <li><Link to="/chatapp"><i className="fa fa-comments-o"></i><span>{t("Chat App")}</span></Link></li> */}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/payments"><i className="fa fa-credit-card"></i><span>{t("Payments")}</span></Link></li>}
                        {/* { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/exam"><i className="fa fa-list-ul"></i><span>{t("Exam")}</span></Link></li>} */}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/levels"><i className="fa fa-calendar-check-o"></i><span>{t("Levels")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/groups"><i className="fa fa-users"></i><span>{t("Groups")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/cancelations"><i className="fa fa-window-close"></i><span>{t("Cancelations")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/notifications"><i className="fa fa-bell"></i><span>{t("Notifications")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/bills"><i className="fa fa-money"></i><span>{t("Bills")}</span></Link></li>}
                        { checkRole(user.role, "adminOrsuperAdmin") && <li><Link to="/blocks"><i className="fa fa-calendar"></i><span>{t("Blocks")}</span></Link></li>}
                        { checkRole(user.role, "superAdmin") && <li><Link to="/settings"><i className="fa fa-gear"></i><span>{t("Settings")}</span></Link></li>}
                </ul>
                </nav>
            </div>
        </div>
    </div>
    )

}

export default LeftSidbar