import { useEffect, useState } from 'react'
import Header from './Header'
import TopHeader from './TopHeader'
import RightSidebar from './RightSidebar'
import LeftSidbar from './LeftSidbar'
import Loader from './Loader'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import PrivateRoute from '../Auth/PrivateRoute'
import { getLocalStorage } from '../../common/localStorage'
import { useTranslation } from 'react-i18next'
import { checkRole } from '../../common/funs'
import { useSelector } from 'react-redux'



const Container = ({ children, tabs, links, btns }) => {

    const [refresher, setRefresher] = useState(0);
    const { i18n } = useTranslation();
    const { user, isLoggedIn } = useSelector(state => state.auth)

    useEffect(() => {
  
      //const boxLayout = getLocalStorage("boxLayout") ? getLocalStorage("boxLayout") : "false"
      const RTLSupport = getLocalStorage("RTLSupport") ? getLocalStorage("RTLSupport") : "false"
      //const boxShadow = getLocalStorage("boxShadow") ? getLocalStorage("boxShadow") : "false"
      const gradientColor = getLocalStorage("gradientColor") ? getLocalStorage("gradientColor") : "false"
      const iconColor = getLocalStorage("iconColor") ? getLocalStorage("iconColor") : "false"
      const sidebarDark = getLocalStorage("sidebarDark") ? getLocalStorage("sidebarDark") : "false"
      const minSidebarDark = getLocalStorage("minSidebarDark") ? getLocalStorage("minSidebarDark") : "false"
      const headerDark = getLocalStorage("headerDark") ? getLocalStorage("headerDark") : "false"
      const topBarSticky = getLocalStorage("topBarSticky") ? getLocalStorage("topBarSticky") : "false"
      const fullDarkMode = getLocalStorage("fullDarkMode") ? getLocalStorage("fullDarkMode") : "false"
      const fontSetting = getLocalStorage("fontSetting") ? getLocalStorage("fontSetting") : "font-muli"
      const skinChanger = getLocalStorage("skinChanger") ? getLocalStorage("skinChanger") : "theme-azure"
      const lang = getLocalStorage("lang") ? getLocalStorage("lang") : "en"
  
      if (lang) {
          i18n.changeLanguage(lang) 
      }

      const classes = [""]
  

      //if (boxShadow !== "false") { document.querySelector('.card, .btn, .progress').classList.add('box_shadow'); }
      if (minSidebarDark !== "false") { document.querySelector('#header_top').classList.add('dark'); }
      if (headerDark !== "false") {document.querySelector('#page_top').classList.add('top_dark'); }
      if (topBarSticky !== "false") { document.querySelector('#page_top').classList.add('sticky-top'); }

      //if (boxLayout !== "false") { classes.push("boxlayout") }
      if (RTLSupport !== "false") { classes.push("rtl") }
      if (gradientColor !== "false") { classes.push("gradient") }
      if (iconColor !== "false") { classes.push("iconcolor") }
      if (sidebarDark !== "false") { classes.push("sidebar_dark") }
      if (fullDarkMode !== "false") { classes.push("dark-mode") }
      
      if (fontSetting) { classes.push(fontSetting) }
      if (skinChanger) { classes.push(skinChanger) }

      const $body = document.querySelector('body');
     // $body.classList.add(classes.join(" "));
      $body.className = classes.join(" ")

    }, [refresher])

  
    return (
        <PrivateRoute>
                <Loader />
                <div id="main_content">
                    {/* <!-- Start Main top header --> */}
                    { isLoggedIn && <TopHeader />}
                    {/* <!-- Start Rightbar setting panel --> */}
                    { isLoggedIn && <RightSidebar refresher={refresher} setRefresher={setRefresher} />}

                    {/* <!-- Start Main leftbar navigation --> */}
                    { isLoggedIn && checkRole(user.role, "teacherOradminOrsuperAdmin") && <LeftSidbar /> }
                    {/* <!-- Start project content area --> */}
                    <div className="page">
                        <Header refresher={refresher} setRefresher={setRefresher} />
                        <Breadcrumb tabs={tabs} links={links} btns={btns} />

                        <div className="section-body mt-4">
                            <div className="container-fluid">

                                {children}

                            </div>
                        </div>
                        <Footer />

                    </div>
                </div>
        </PrivateRoute>
    )

}

export default Container