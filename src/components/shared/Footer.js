import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();

    

  

    return  (
        // <!-- Start main footer -->
        <div className="section-body">
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            Copyright © 2022 <a href="#">{t("Privilege")}</a>.
                        </div> 
                        <div className="col-md-6 col-sm-12 text-md-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="btn btn-outline-primary btn-sm">Beta</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer