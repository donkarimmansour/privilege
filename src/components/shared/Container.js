import { useState } from 'react'
import Header from './Header'
import TopHeader from './TopHeader'
import RightSidebar from './RightSidebar'
import LeftSidbar from './LeftSidbar'
import Loader from './Loader'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import PrivateRoute from '../Auth/PrivateRoute'



const Container = ({ children, tabs, links, btns }) => {

    const [refresher, setRefresher] = useState(1)

    return (
        <PrivateRoute>
                <Loader />
                <div id="main_content">
                    {/* <!-- Start Main top header --> */}
                    <TopHeader />
                    {/* <!-- Start Rightbar setting panel --> */}
                    <RightSidebar refresher={refresher} setRefresher={setRefresher} />

                    {/* <!-- Start Main leftbar navigation --> */}
                    <LeftSidbar />
                    {/* <!-- Start project content area --> */}
                    <div className="page">
                        <Header />
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