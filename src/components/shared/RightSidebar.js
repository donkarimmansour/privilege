import react from 'react'
import { useTranslation } from 'react-i18next';
import { removeSiblingsClass } from '../../common/funs';
import { getLocalStorage, setLocalStorage } from '../../common/localStorage';
import myClassname from "classnames";

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

        setLocalStorage("skinChanger", 'theme-' + $this.target.getAttribute('data-theme') )
        setRefresher(refresher + 1)
    }

    //Font Settings
    const fontSetting = (e) => { 
        var $body = document.querySelector('body');

        $body.classList.remove('font-montserrat');
        $body.classList.remove('font-muli');
        $body.classList.remove('font-poppins');
        $body.classList.add(e.target.value);

        setLocalStorage("fontSetting", e.target.value)
        setRefresher(refresher + 1)
    }

    //Full Dark mode
    const fullDarkMode = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
        setLocalStorage("fullDarkMode", getLocalStorage("fullDarkMode") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }

   
    //Top bar sticky
    const topBarSticky = (el) => {
        if (el.target.checked) {
            document.querySelector('#page_top').classList.add('sticky-top');
        } else {
            document.querySelector('#page_top').classList.remove('sticky-top');
        }
        setLocalStorage("topBarSticky", getLocalStorage("topBarSticky") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }

    //icon-color
    const iconColor = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('iconcolor');
        } else {
            document.querySelector('body').classList.remove('iconcolor');
        }
        setLocalStorage("iconColor", getLocalStorage("iconColor") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }

    //Gradient Color
    const gradientColor = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('gradient');
        } else {
            document.querySelector('body').classList.remove('gradient');
        }
        setLocalStorage("gradientColor", getLocalStorage("gradientColor") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }


    //Box Shadow
    const boxShadow = (el) => {
        if (el.target.checked) {
            document.querySelector('.card, .btn, .progress').classList.add('box_shadow');
        } else {
            document.querySelector('.card, .btn, .progress').classList.remove('box_shadow');
        }
        setLocalStorage("boxShadow", getLocalStorage("boxShadow") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }

    //Box Layout
    const boxLayout = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('boxlayout');
        } else {
            document.querySelector('body').classList.remove('boxlayout');
        }
        setLocalStorage("boxLayout", getLocalStorage("boxLayout") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }

    //RTL Support
    const RTLSupport = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('rtl');
        } else {
            document.querySelector('body').classList.remove('rtl');
        }

        setLocalStorage("RTLSupport", getLocalStorage("RTLSupport") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }

    //Header Dark
    const headerDark = (el) => {
        if (el.target.checked) {
            document.querySelector('#page_top').classList.add('top_dark');
        } else {
            document.querySelector('#page_top').classList.remove('top_dark');
        }

        setLocalStorage("headerDark", getLocalStorage("headerDark") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }


    //Min Sidebar Dark
    const minSidebarDark = (el) => {
        if (el.target.checked) {
            document.querySelector('#header_top').classList.add('dark');
        } else {
            document.querySelector('#header_top').classList.remove('dark');
        }
        setLocalStorage("minSidebarDark", getLocalStorage("minSidebarDark") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }


    //Sidebar Dark
    const sidebarDark = (el) => {
        if (el.target.checked) {
            document.querySelector('body').classList.add('sidebar_dark');
        } else {
            document.querySelector('body').classList.remove('sidebar_dark');
        }
        setLocalStorage("sidebarDark", getLocalStorage("sidebarDark") === "true" ? "false" : "true")
        setRefresher(refresher + 1)
    }


    // right side bar
    const rightSideBar = (el) => {
        document.querySelector('.right_sidebar').classList.toggle('open');
    }






    return (
        // <!-- Start Rightbar setting panel -->
        <div id="rightsidebar" className="right_sidebar">
            <a href="#!" className="p-3 settingbar float-right" onClick={rightSideBar}><i className="fa fa-close"></i></a>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">Settings</a></li>
                {/* <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">Activity</a></li> */}
            </ul>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane vivify fadeIn active" id="Settings" aria-expanded="true">
                    <div className="mb-4">
                        <h6 className="font-14 font-weight-bold text-muted">{t("Theme Color")}</h6>
                        <ul className="choose-skin list-unstyled mb-0">
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-azure"})} onClick={skinChanger} data-theme="azure"><div className="azure"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-indigo"})} onClick={skinChanger} data-theme="indigo"><div className="indigo"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-purple"})} onClick={skinChanger} data-theme="purple"><div className="purple"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-orange"})} onClick={skinChanger} data-theme="orange"><div className="orange"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-green"})} onClick={skinChanger} data-theme="green"><div className="green"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-cyan"})} onClick={skinChanger} data-theme="cyan"><div className="cyan"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-blush"})} onClick={skinChanger} data-theme="blush"><div className="blush"></div></li>
                            <li className={myClassname({ "active" : getLocalStorage("skinChanger") === "theme-white"})} onClick={skinChanger} data-theme="white"><div className="bg-white"></div></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h6 className="font-14 font-weight-bold text-muted">{t("Font Style")}</h6>
                        <div className="custom-controls-stacked font_setting">
                            <label className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="font" value="font-muli" defaultChecked={getLocalStorage("fontSetting") === "font-muli" ? true : false } onChange={fontSetting} />
                                <span className="custom-control-label">{t("Muli Google Font")}</span>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="font" value="font-montserrat" defaultChecked={getLocalStorage("fontSetting") === "font-montserrat" ? true : false } onChange={fontSetting} />
                                <span className="custom-control-label">{t("Montserrat Google Font")}</span>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="font" value="font-poppins" defaultChecked={getLocalStorage("fontSetting") === "font-poppins" ? true : false } onChange={fontSetting} />
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
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("fullDarkMode") === "true" ? true : false } onClick={fullDarkMode} className="custom-switch-input btn-darkmode" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Fix Navbar top")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("topBarSticky") === "true" ? true : false } onClick={topBarSticky} className="custom-switch-input btn-fixnavbar" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Header Dark")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("headerDark") === "true" ? true : false } onClick={headerDark} className="custom-switch-input btn-pageheader" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Min Sidebar Dark")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("minSidebarDark") === "true" ? true : false } onClick={minSidebarDark} className="custom-switch-input btn-min_sidebar" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Sidebar Dark")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("sidebarDark") === "true" ? true : false } onClick={sidebarDark} className="custom-switch-input btn-sidebar" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Icon Color")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("iconColor") === "true" ? true : false } onClick={iconColor} className="custom-switch-input btn-iconcolor" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Gradient Color")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("gradientColor") === "true" ? true : false } onClick={gradientColor} className="custom-switch-input btn-gradient" defaultChecked />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Box Shadow")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("boxShadow") === "true" ? true : false } onClick={boxShadow} className="custom-switch-input btn-boxshadow" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("RTL Support")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("RTLSupport") === "true" ? true : false } onClick={RTLSupport} className="custom-switch-input btn-rtl" />
                                    <span className="custom-switch-indicator"></span>
                                </label>
                            </li>
                            <li>
                                <label className="custom-switch">
                                    <span className="custom-switch-description">{t("Box Layout")}</span>
                                    <input type="checkbox" name="custom-switch-checkbox" defaultChecked={getLocalStorage("boxLayout") === "true" ? true : false } onClick={boxLayout} className="custom-switch-input btn-boxlayout" />
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