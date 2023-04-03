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
                            {t("Copyright")} © 2023 <a href="#">{t("Privilege")}</a>.
                        </div> 
                        <div className="col-md-6 col-sm-12 text-md-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="#!" className="btn btn-outline-primary btn-sm">{t("Beta")}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer