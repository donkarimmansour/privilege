import react from 'react'
import { Link  } from 'react-router-dom';

const LeftSidbar = () => {

    

    return  (
        // <!-- Start Main leftbar navigation -->
    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">Privilege<a href="javascript:void(0)" className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>
        {/* <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#menu-uni">University</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu-admin">Admin</a></li>
        </ul> */}
        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                <nav className="sidebar-nav">
                 <ul className="metismenu">
                        <li className="active"><Link to="/"><i className="fa fa-dashboard"></i><span>Dashboard</span></Link></li>
                        <li><Link to="/professors"><i className="fa fa-black-tie"></i><span>Professors</span></Link></li>
                        {/* <li><Link to="/staff"><i className="fa fa-user-circle-o"></i><span>Staff</span></Link></li> */}
                        <li><Link to="/students"><i className="fa fa-users"></i><span>Students</span></Link></li>
                        <li><Link to="/departments"><i className="fa fa-users"></i><span>Departments</span></Link></li>
                        <li><Link to="/courses"><i className="fa fa-graduation-cap"></i><span>Courses</span></Link></li>                        
                        <li><Link to="/library"><i className="fa fa-book"></i><span>Library</span></Link></li>
                        {/* <li><Link to="/holiday"><i className="fa fa-bullhorn"></i><span>Holiday</span></Link></li> */}
                        {/* <li className="g_heading">Extra</li> */}
                        {/* <li><Link to="/calender"><i className="fa fa-calendar"></i><span>Calender</span></Link></li> */}
                        <li><Link to="/chatapp"><i className="fa fa-comments-o"></i><span>Chat App</span></Link></li>
                        <li><Link to="/payments"><i className="fa fa-credit-card"></i><span>Payments</span></Link></li>
                        {/* <li><Link to="/noticeboard"><i className="fa fa-dashboard"></i><span>Noticeboard</span></Link></li> */}
                        <li><Link to="/exam"><i className="fa fa-list-ul"></i><span>Exam</span></Link></li>
                        {/* <li><Link to="/hostel"><i className="fa fa-bed"></i><span>Hostel</span></Link></li> */}
                        {/* <li><Link to="/transport"><i className="fa fa-truck"></i><span>Transport</span></Link></li> */}
                        <li><Link to="/attendance"><i className="fa fa-calendar-check-o"></i><span>Attendance</span></Link></li>
                        <li><Link to="/levels"><i className="fa fa-calendar-check-o"></i><span>Levels</span></Link></li>
                        <li><Link to="/groups"><i className="fa fa-calendar-check-o"></i><span>Groups</span></Link></li>
                        {/* <li><Link to="/leave"><i className="fa fa-flag"></i><span>Leave</span></Link></li> */}
                        <li><Link to="/settings"><i className="fa fa-gear"></i><span>Settings</span></Link></li>
                        {/* <li><Link to="/app-contact"><i className="fa fa-address-book"></i><span>Contact</span></Link></li> */}
                        {/* <li><Link to="/app-filemanager"><i className="fa fa-folder"></i><span>FileManager</span></Link></li> */}
                        {/* <li><Link to="/our-centres"><i className="fa fa-map"></i><span>OurCentres</span></Link></li> */}
                        {/* <li><Link to="/gallery"><i className="fa fa-camera-retro"></i><span>Gallery</span></Link></li> */}
                </ul>
                </nav>
            </div>
            {/* <div className="tab-pane fade" id="menu-admin" role="tabpanel">
                <nav className="sidebar-nav">
                     <ul className="metismenu">
                        <li><Link to="/payments"><i className="fa fa-credit-card"></i><span>Payments</span></Link></li>
                        <li><Link to="/noticeboard"><i className="fa fa-dashboard"></i><span>Noticeboard</span></Link></li>
                        <li><Link to="/taskboard"><i className="fa fa-list-ul"></i><span>Taskboard</span></Link></li>
                        <li><Link to="/hostel"><i className="fa fa-bed"></i><span>Hostel</span></Link></li>
                        <li><Link to="/transport"><i className="fa fa-truck"></i><span>Transport</span></Link></li>
                        <li><Link to="/attendance"><i className="fa fa-calendar-check-o"></i><span>Attendance</span></Link></li>
                        <li><Link to="/leave"><i className="fa fa-flag"></i><span>Leave</span></Link></li>
                        <li><Link to="/setting"><i className="fa fa-gear"></i><span>Settings</span></Link></li>
                    </ul>
                </nav>
            </div> */}
        </div>
    </div>
    )

}

export default LeftSidbar