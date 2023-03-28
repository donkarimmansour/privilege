import react, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import moment from 'moment';


const ActionsModal = ({toggleModal, modalState, actions}) => {
    const { t } = useTranslation()

 
    return (

        //    {/* <!-- Modal --> */ }
        <div className="modal show" style={{ display: modalState ? "block" : "none" }}>
            <div className="modal-dialog ">

                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">{t('Actions')}</h5>
                        <button type="button" className="close" onClick={() => { toggleModal(modalState => !modalState) }}>
                            <span>&times;</span>
                        </button>
                    </div>

                    <div className="modal-body" style={{ maxHeight: "50vh", overflowY: "scroll" }}>

                        {actions && actions.length > 0 && actions.map((action, ai) => {
                            return (

                                <ul key={ai} className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">{t("FullName")} <span className="badge badge-primary badge-pill">{action.fullName}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">{t("Role")} <span className="badge badge-primary badge-pill">{action.role}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">{t("Action")} <span className="badge badge-primary badge-pill">{action.action}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">{t("Date")} <span className="badge badge-primary badge-pill">{moment(action.date).format("DD/MM/YYYY HH:mm")}</span></li>
                                </ul>


                            )
                        })}

                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => { toggleModal(modalState => !modalState) }}>{t('Close')}</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActionsModal