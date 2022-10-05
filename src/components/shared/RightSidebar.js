import react from 'react'
import { useTranslation } from 'react-i18next';
import { removeSiblingsClass } from '../../common/funs';


const RightSidebar = ({refresher , setRefresher}) => {
    const { t } = useTranslation();
    
    //skin Changer
    const skinChanger = (e) => {
        var $body = document.querySelector('body');
        var $this = e

        const existTheme = document.querySelector('.choose-skin li.active').getAttribute('data-theme');

        removeSiblingsClass($this.target, "active")

        $this.target.classList.add('active');

        $body.classList.remove('theme-' + existTheme);
        $body.classList.add('theme-' + $this.target.getAttribute('data-theme'));
        setRefresher(refresher++)
    }

    //Font Settings
    const fontSetting = (e) => { 
        var $body = document.querySelector('body');

        $body.classList.remove('font-montserrat');
        $body.classList.remove('font-muli');
        $body.classList.remove('font-poppins');
        $body.classList.add(e.target.value);
        setRefresher(refresher++)
    }

    //Full Dark mode
    const fullDarkMode = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
        setRefresher(refresher++)
    }

   
    //Top bar sticky
    const topBarSticky = (el) => {
        if (el.target.checked) {
            document.querySelector('#page_top').classList.add('sticky-top');
        } else {
            document.querySelector('#page_top').classList.remove('sticky-top');
        }
        setRefresher(refresher++)
    }

    //icon-color
    const iconColor = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('iconcolor');
        } else {
            document.querySelector('body').classList.remove('iconcolor');
        }
        setRefresher(refresher++)
    }

    //Gradient Color
    const gradientColor = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('gradient');
        } else {
            document.querySelector('body').classList.remove('gradient');
        }
        setRefresher(refresher++)
    }


    //Box Shadow
    const boxShadow = (el) => {
        if (el.target.checked) {
            document.querySelector('.card, .btn, .progress').classList.add('box_shadow');
        } else {
            document.querySelector('.card, .btn, .progress').classList.remove('box_shadow');
        }
        setRefresher(refresher++)
    }

    //Box Layout
    const boxLayout = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('boxlayout');
        } else {
            document.querySelector('body').classList.remove('boxlayout');
        }
        setRefresher(refresher++)
    }

    //RTL Support
    const RTLSupport = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('rtl');
        } else {
            document.querySelector('body').classList.remove('rtl');
        }
        setRefresher(refresher++)
    }

    //Header Dark
    const headerDark = (el) => {
        if (el.target.checked) {
            document.querySelector('#page_top').classList.add('top_dark');
        } else {
            document.querySelector('#page_top').classList.remove('top_dark');
        }
        setRefresher(refresher++)
    }


    //Min Sidebar Dark
    const minSidebarDark = (el) => {
        if (el.target.checked) {
            document.querySelector('#header_top').classList.add('dark');
        } else {
            document.querySelector('#header_top').classList.remove('dark');
        }
        setRefresher(refresher++)
    }


    //Sidebar Dark
    const sidebarDark = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('sidebar_dark');
        } else {
            document.querySelector('body').classList.remove('sidebar_dark');
        }
        setRefresher(refresher++)
    }


    // right side bar
    const rightSideBar = (el) => {
        document.querySelector('.right_sidebar').classList.toggle('open');
    }


    return (
        // <!-- Start Rightbar setting panel -->
        <div id="rightsidebar" className="right_sidebar">
            <a href="javascript:void(0)" className="p-3 settingbar float-right" onClick={rightSideBar}><i className="fa fa-close"></i></a>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">Settings</a></li>
                {/* <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">Activity</a></li> */}
            </ul>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane vivify fadeIn active" id="Settings" aria-expanded="true">
                    <div className="mb-4">
                        <h6 className="font-14 font-weight-bold text-muted">{t("Theme Color")}</h6>
                        <ul className="choose-skin list-unstyled mb-0">
                            <li onClick={skinChanger} data-theme="azure"><div className="azure"></div></li>
                            <li onClick={skinChanger} data-theme="indigo"><div className="indigo"></div></li>
                            <li onClick={skinChanger} data-theme="purple"><div className="purple"></div></li>
                            <li onClick={skinChanger} data-theme="orange"><div className="orange"></div></li>
                            <li onClick={skinChanger} data-theme="green"><div className="green"></div></li>
                            <li onClick={skinChanger} data-theme="cyan" className="active"><div className="cyan"></div></li>
                            <li onClick={skinChanger} data-theme="blush"><div className="blush"></div></li>
                            <li onClick={skinChanger} data-theme="white"><div className="bg-white"></div></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h6 className="font-14 font-weight-bold text-muted">{t("Font Style")}</h6>
                        <div className="custom-controls-stacked font_setting">
                            <label className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="font" value="font-muli" defaultChecked onChange={fontSetting} />
                                <span className="custom-control-label">{t("Muli Google Font")}</span>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="font" value="font-montserrat" onChange={fontSetting} />
                                <span className="custom-control-label">{t("Montserrat Google Font")}</span>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="font" value="font-poppins" onChange={fontSetting} />
                                <span className="custom-control-label">{t("Poppins Google Font")}</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h6 className="font-14 font-weight-bold mt-4 text-muted">{t("General Settings")}</h6>
                        <ul className="setting-list list-unstyled mt-1 setting_switch">
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Night Mode")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={fullDarkMode} className="custom-switch-input btn-darkmode" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Fix Navbar top")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={topBarSticky} className="custom-switch-input btn-fixnavbar" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Header Dark")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={headerDark} className="custom-switch-input btn-pageheader" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Min Sidebar Dark")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={minSidebarDark} className="custom-switch-input btn-min_sidebar" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Sidebar Dark")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={sidebarDark} className="custom-switch-input btn-sidebar" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Icon Color")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={iconColor} className="custom-switch-input btn-iconcolor" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Gradient Color")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={gradientColor} className="custom-switch-input btn-gradient" defaultChecked />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Box Shadow")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={boxShadow} className="custom-switch-input btn-boxshadow" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("RTL Support")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={RTLSupport} className="custom-switch-input btn-rtl" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Box Layout")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" onClick={boxLayout} className="custom-switch-input btn-boxlayout" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                        </ul>
                    </div>

                </div>



            </div>
        </div>
    )

}

export default RightSidebar