import react, { Fragment } from 'react'
import myClassName from 'classnames'


const Breadcrumb = ({links , tabs , btns}) => {



    

    return  (
        // <!-- Start Page title and tab -->
        <div className="section-body">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="header-action">
                        <h1 className="page-title">{links && links.length && links[(links.length - 1)].name}</h1>
                        <ol className="breadcrumb page-breadcrumb">

                            {links && links.length > 0 && links.map((link, li) => {
                                return <li key={li} className={myClassName("breadcrumb-item", { "active": li === (links.length - 1) })} {...(li === (links.length - 1) && { 'aria-current': "page" })}>
                                    {li !== (links.length - 1) ? <a href={link.url}>{link.name}</a> : link.name}
                                </li>
                            })}

                        </ol>
                    </div>
                    <ul className="nav nav-tabs page-header-tab" >

                        { tabs && tabs.length > 0 && tabs.map((tab , ti) => {
                            return <li key={ti} className="nav-item"><a className={myClassName("nav-link" , { "active" : ti === 0} )}  data-toggle="tab" href={tab.id}>{tab.name}</a></li>
                        })}
                      
                    </ul>

                       { btns && btns.length > 0 && btns.map((btn , bi) => {
                            return <Fragment key={bi} > {btn} </Fragment>
                        })}
                </div>
            </div>
        </div>
    )

}

export default Breadcrumb