import react from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


const Header = () => {
    const { t, i18n } = useTranslation();

    console.log(i18n.language); 
    //i18n.changeLanguage("fr")

    return  (
        // <!-- Start Page header -->
        <div className="section-body" id="page_top">
            <div className="container-fluid">
                <div className="page-header">
                    <div className="left">                        
                        {/* <div className="input-group">
                            <input type="text" className="form-control" placeholder="What you want to find" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div> */}
                    </div>
                    <div className="right">
                        {/* <ul className="nav nav-pills">                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/page-empty">Empty page</Link>
                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                    <Link className="dropdown-item" to="/page-search">Search Results</Link>
                                    <Link className="dropdown-item" to="/page-timeline">Timeline</Link>
                                    <Link className="dropdown-item" to="/page-invoices">Invoices</Link>
                                    <Link className="dropdown-item" to="/page-pricing">Pricing</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="login">Login</Link>
                                    <Link className="dropdown-item" to="register">Register</Link>
                                    <Link className="dropdown-item" to="forgot-password">Forgot password</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="404">404 error</Link>
                                    <Link className="dropdown-item" to="500">500 error</Link>
                                </div>
                            </li> 
                        </ul>
                        */} 
                       
                        <div className="notification d-flex">
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-language"></i></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#en" onClick={() => { i18n.changeLanguage("en") }}><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="" />{t("English")}</a>
                                    <div className="dropdown-divider"></div>
                                    {/* className={i18n.language === "en" ? "active" : ""} */}
                                    {/* <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/es.svg" alt="" />Spanish</a> */}
                                    {/* <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/jp.svg" alt="" />japanese</a> */}
                                    <a className="dropdown-item" href="#fr" onClick={() => { i18n.changeLanguage("fr") }}><img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt="" />{t("France")}</a> 
                                </div>
                            
                            </div>

{/*                             
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success nav-unread"></span></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <ul className="right_chat list-unstyled w350 p-0">
                                        <li className="online">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Donald Gardner</span>
                                                    <div className="message">It is a long established fact that a reader</div>
                                                    <small>11 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="online">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Wendy Keen</span>
                                                    <div className="message">There are many variations of passages of Lorem Ipsum</div>
                                                    <small>18 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>                            
                                        </li>
                                        <li className="offline">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Matt Rosales</span>
                                                    <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                                    <small>27 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>                            
                                        </li>
                                        <li className="online">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                                                <div className="media-body">
                                                    <span className="name">Phillip Smith</span>
                                                    <div className="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                                                    <small>33 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>                            
                                        </li>                        
                                    </ul>
                                    <div className="dropdown-divider"></div>
                                    <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                                </div>
                            </div>
                            */}
                           
                           
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-primary nav-unread"></span></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <ul className="list-unstyled feeds_widget">
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-blue"><i className="fa fa-check"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">Campaign <strong className="text-blue font-weight-bold">Holiday</strong> is nearly reach budget limit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-green"><i className="fa fa-user"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">New admission <strong className="text-green font-weight-bold">32</strong> in computer department.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-red"><i className="fa fa-info"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">6th sem result <strong className="text-red font-weight-bold">67%</strong> in computer department.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-azure"><i className="fa fa-thumbs-o-up"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">New Feedback <strong className="text-azure font-weight-bold">53</strong> for university assessment.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="dropdown-divider"></div>
                                    <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                                </div>
                            </div>
                            <div className="dropdown d-flex">
                                <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                    <span className="avatar" style={{backgroundImage: "url(../assets/images/xs/avatar5.jpg)"}}></span> George</a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <Link className="dropdown-item" to="/profile"><i className="dropdown-icon fe fe-user"></i> Profile</Link>
                                    <Link className="dropdown-item" to="/settings"><i className="dropdown-icon fe fe-settings"></i> Settings</Link>
                                    <Link className="dropdown-item" to="/chatapp"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail"></i> Inbox</Link>
                                    {/* <Link className="dropdown-item" to="/chatapp"><i className="dropdown-icon fe fe-send"></i> Message</Link> */}
                                    <div className="dropdown-divider"></div>
                                    {/* <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-help-circle"></i> Need help?</a> */}
                                    <Link className="dropdown-item" to="/login.html"><i className="dropdown-icon fe fe-log-out"></i> Sign out</Link>
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