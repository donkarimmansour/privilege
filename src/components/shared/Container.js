import react, { useEffect, useState } from 'react'
import Header from './Header'
import TopHeader from './TopHeader'
import RightSidebar from './RightSidebar'
import LeftSidbar from './LeftSidbar'
import Loader from './Loader'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import { useNavigate } from 'react-router'



const Container = ({children , tabs , links , btns}) => {

    const [refresher , setRefresher] = useState(1)

    const navigate =  useNavigate()

    useEffect(() => {

        setTimeout(() => {
            document.querySelector(".page-loader-wrapper").style.visibility = "hidden";
            document.querySelector(".page-loader-wrapper").style.opacity = 0;
            document.querySelector(".page-loader-wrapper").style.transition = "visibility 0s 2s, opacity 2s linear";
        }, 50);


        const ww = document.body.clientWidth;
        if (ww < 1530) {
            document.querySelector('body').classList.add('close_rightbar');
        } else if (ww >= 1531) {
            document.querySelector('body').classList.remove('close_rightbar');
        };


    }, [navigate])



    return (
        <>
            <Loader />
            <div id="main_content">
                {/* <!-- Start Main top header --> */}
                <TopHeader />
                {/* <!-- Start Rightbar setting panel --> */}
                <RightSidebar refresher={refresher}  setRefresher={setRefresher}/>

                {/* <!-- Start Main leftbar navigation --> */}
                <LeftSidbar />
                {/* <!-- Start project content area --> */}
                <div className="page">
                    <Header />
                    <Breadcrumb tabs={tabs} links={links} btns={btns}/>

                    <div className="section-body mt-4">
                        <div className="container-fluid">

                           {children}

                        </div>
                    </div>
                    <Footer />

                </div>
            </div>
        </>
    )

}

export default Container