import  { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const PaymentsIndex = () => {

  const [editPaymentId , setEditPaymentId] = useState("")


  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Fees"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#fees-all" },
    { name: t("Add"), id: "#fees-add" },
  ]

    return (
      <Container tabs={tabs} links={links}> 
        <div className="tab-content">

          <List setEditPaymentId={setEditPaymentId} />
          <Add editPaymentId={editPaymentId} setEditPaymentId={setEditPaymentId}/>
       
      </div>
      </Container>
    )

}
 
export default PaymentsIndex