import react from 'react'
import { useTranslation } from 'react-i18next';
import { Link  } from 'react-router-dom';

const LeftSidbar = () => {
    const { t } = useTranslation();

    // User Menu
    const userMenu = (el) => {
        document.querySelector('.metismenu').classList.toggle('grid');
        el.target.classList.toggle('active');
    }


    return  (
        // <!-- Start Main leftbar navigation -->
    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">{t("Privilege")}<a href="javascript:void(0)" className="menu_option float-right" onClick={userMenu}><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>

        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                <nav className="sidebar-nav">
                 <ul className="metismenu"> 
                        <li className="active"><Link to="/"><i className="fa fa-dashboard"></i><span>{t("Dashboard")}</span></Link></li>
                        <li><Link to="/professors"><i className="fa fa-black-tie"></i><span>{t("Teachers")}</span></Link></li>
                        <li><Link to="/students"><i className="fa fa-user"></i><span>{t("Students")}</span></Link></li>
                        <li><Link to="/departments"><i className="fa fa-building"></i><span>{t("Departments")}</span></Link></li>
                        <li><Link to="/courses"><i className="fa fa-graduation-cap"></i><span>{t("Classes")}</span></Link></li>                        
                        <li><Link to="/library"><i className="fa fa-book"></i><span>{t("Books")}</span></Link></li>
                        <li><Link to="/chatapp"><i className="fa fa-comments-o"></i><span>{t("Chat App")}</span></Link></li>
                        <li><Link to="/payments"><i className="fa fa-credit-card"></i><span>{t("Payments")}</span></Link></li>
                        <li><Link to="/exam"><i className="fa fa-list-ul"></i><span>{t("Exam")}</span></Link></li>
                        <li><Link to="/levels"><i className="fa fa-calendar-check-o"></i><span>{t("Levels")}</span></Link></li>
                        <li><Link to="/groups"><i className="fa fa-users"></i><span>{t("Groups")}</span></Link></li>
                        <li><Link to="/settings"><i className="fa fa-gear"></i><span>{t("Settings")}</span></Link></li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    )

}

export default LeftSidbar