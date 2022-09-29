import react from 'react'


const TopHeader = () => {

    return  (
        // <!-- Start Main top header -->
        <div id="header_top" className="header_top">
            <div className="container">
                <div className="hleft">
                    <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo"></i></a>
                    <div className="dropdown">
                        <a href="javascript:void(0)" className="nav-link icon menu_toggle"><i className="fe fe-align-center"></i></a>
                        {/* <a href="page-search.html" className="nav-link icon"><i className="fe fe-search" data-toggle="tooltip" data-placement="right" title="Search..."></i></a> */}
                        {/* <a href="app-email.html"  className="nav-link icon app_inbox"><i className="fe fe-inbox" data-toggle="tooltip" data-placement="right" title="Inbox"></i></a> */}
                        {/* <a href="app-filemanager.html"  className="nav-link icon app_file xs-hide"><i className="fe fe-folder" data-toggle="tooltip" data-placement="right" title="File Manager"></i></a> */}
                        {/* <a href="app-social.html"  className="nav-link icon xs-hide"><i className="fe fe-share-2" data-toggle="tooltip" data-placement="right" title="Social Media"></i></a> */}
                        {/* <a href="javascript:void(0)" className="nav-link icon theme_btn"><i className="fe fe-feather"></i></a> */}
                        <a href="javascript:void(0)" className="nav-link icon settingbar"><i className="fe fe-settings"></i></a>
                    </div>
                </div>
                <div className="hright">
                    <a href="javascript:void(0)" className="nav-link icon right_tab"><i className="fe fe-align-right"></i></a>
                    <a href="login.html" className="nav-link icon settingbar"><i className="fe fe-power"></i></a>                
                </div>
            </div>
        </div>
    )

}

export default TopHeader