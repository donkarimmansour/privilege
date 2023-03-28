
import react from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'



const P500 = () => {

  const { t } = useTranslation();

    return (
        <>
             <div className="auth option2">
        <div className="auth_left">
          <div className="card">
            <div className="card-body text-center">
              <div className="display-3 text-muted mb-5"><i className="si si-exclamation" /> 500</div>
              <h1 className="h3 mb-3">{t('Oops.. You just found an error page..')}</h1>
              <p className="h6 text-muted font-weight-normal mb-3">{t('We are sorry but your request contains bad syntax and cannot be fulfilled…')}</p>
              <Link className="btn btn-primary" to="/"><i className="fe fe-arrow-left mr-2" />{t('Go back')}</Link>
            </div>
          </div>        
        </div>
      </div>

        </>
    )

}

export default P500