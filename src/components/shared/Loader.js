import react, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Loader = () => {

    const navigate =  useNavigate()
  
    useEffect(() => {

        setTimeout(() => {
            document.querySelector(".page-loader-wrapper").style.visibility = "hidden";
            document.querySelector(".page-loader-wrapper").style.opacity = 0;
            document.querySelector(".page-loader-wrapper").style.transition = "visibility 0s 2s, opacity 2s linear";
       
            const ww = document.body.clientWidth;
            if (ww < 1530) {
                document.querySelector('body').classList.add('close_rightbar');
            } else if (ww >= 1531) {
                document.querySelector('body').classList.remove('close_rightbar');
            };
        }, 50);

    }, [navigate])

    return (
        // <!-- Page Loader -->
        <div className="page-loader-wrapper">
            <div className="loader">
            </div>
        </div>
    )

}

export default Loader