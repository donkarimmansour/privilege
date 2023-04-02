import react, { Fragment } from 'react'
import myClassName from 'classnames'
import { useTranslation } from 'react-i18next';


const Breadcrumb = ({links , tabs , btns}) => {
    const { t } = useTranslation();


    return  (
        // <!-- Start Page title and tab -->
        <div className="section-body">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="header-action">
                        <h1 className="page-title">{links && links.length && t(links[(links.length - 1)].name)}</h1>
                        <ol className="breadcrumb page-breadcrumb">

                            {links && links.length > 0 && links.map((link, li) => {
                                return <li key={li} className={myClassName("breadcrumb-item", { "active": li === (links.length - 1) })}
                                    {...(li === (links.length - 1) && { 'aria-current': "page" }) }>

                                    {li !== (links.length - 1) ? <a href={link.url}>{t(link.name)}</a> : t(link.name)}
                                </li>
                            })}

                        </ol>
                    </div>
                    <ul className="nav nav-tabs page-header-tab" >

                        { tabs && tabs.length > 0 && tabs.map((tab , ti) => {
                            return <li key={ti} className="nav-item"><a className={myClassName("nav-link" , { "active" : ti === 0} )}  data-toggle="tab" href={tab.id}>{t(tab.name)}</a></li>
                        })}
                      
                    </ul>

                       { btns && btns.length > 0 && btns.map((btn , bi) => {
                            return <Fragment key={bi} > {t(btn)} </Fragment>
                        })}
                </div>
            </div>
        </div>
    )

}

export default Breadcrumb