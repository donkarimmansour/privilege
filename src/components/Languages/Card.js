import react, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import ActionsModal from '../shared/ActionsModal';


const Card = ({language , OnEdit , OnDelete}) => {
  const { t } = useTranslation();
  const [modalState, toggleModal] = useState(false)

  //Actions Pupup
  const ActionsPupup = () => {
    toggleModal(true)
  }



  return (
    <div className="card ribbon">
      
      <ActionsModal modalState={modalState} toggleModal={toggleModal} actions={language.actions} />


      {/* <div className="ribbon-box orange"><i className="fa fa-star"></i></div> */}
          
      <div className="card-body d-flex flex-column">
        <h5><Link to={`/language/view/${language._id}`} >{language.name}</Link></h5>
        <div className="text-muted">{language.description}</div>
      </div>
      
      <div className="table-responsive">
        <table className="table table-striped table-vcenter mb-0">
          <tbody>
            <tr>
              <td className="w20"><i className="fa fa-black-tie text-blue" /></td>
              <td className="tx-medium">{t('Teachers')}</td>
              <td className="text-right">{language.teachersCount}</td>
            </tr>
            {/* <tr>
                  <td><i className="fa fa-cc-visa text-danger" /></td>
                    <td className="tx-medium">{t('Fees')}</td>
                    <td className="text-right">{language.fees}</td>
                  </tr> */}
            <tr>
              <td><i className="fa fa-users text-warning" /></td>
              <td className="tx-medium">{t('Students')}</td>
              <td className="text-right">{language.studentsCount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card-footer">

        <div className="d-flex align-items-center mt-auto">
          <div>
            <a className="ml-3" onClick={(e) => { OnEdit(language._id, e) }}><i className="fa fa-edit mr-1"></i> </a>
          </div>

          <div className="ml-auto">
            <a className="ml-3" onClick={(e) => { ActionsPupup() }}><i className="fa fa-eye text-primary mr-1"></i> </a>
          </div>

          <div className="ml-auto text-muted">
            <a className="ml-3" onClick={(e) => { OnDelete(language._id) }}><i className="fa fa-trash-o text-danger mr-1"></i> </a>
          </div>

        </div>
      </div>

    </div>

  )

}

export default Card