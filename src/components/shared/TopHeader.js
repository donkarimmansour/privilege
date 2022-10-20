import react from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/auth/reducer';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';


const TopHeader = () => {
    const navigate = useNavigate()
    const dispach = useDispatch()

    // Menu toggle
    const menuToggle = (el) => {
        document.querySelector('body').classList.toggle('offcanvas-active');
    }


    // right side bar
    const rightSideBar = (el) => {
        document.querySelector('.right_sidebar').classList.toggle('open');
    }

    const logout = () => {
        dispach(logOut())
        navigate("/login")
    }




    return (
        // <!-- Start Main top header -->
        <div id="header_top" className="header_top">
            <div className="container">
                <div className="hleft">
                    <Link className="header-brand" to="/"><i className="fa fa-graduation-cap brand-logo"></i></Link>
                    <div className="dropdown">
                        <a href="javascript:void(0)" className="nav-link icon menu_toggle" onClick={menuToggle}><i className="fe fe-align-center"></i></a>

                        <a href="javascript:void(0)" className="nav-link icon settingbar" onClick={rightSideBar}><i className="fe fe-settings"></i></a>
                    </div>
                </div>
                <div className="hright">
                    <a href="javascript:void(0);" onClick={logout} className="nav-link icon settingbar"><i className="fe fe-power"></i></a>
                </div>
            </div>
        </div>
    )

}

export default TopHeader