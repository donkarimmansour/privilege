import  { useState } from 'react'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const PaymentsIndex = () => {

  const [editPaymentId , setEditPaymentId] = useState("")

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Fees" , url : "#"} ,
]

const tabs = [
    {name : "List" , id : "#Fees-all"} ,
    {name : "Add Fees" , id : "#Fees-add"}
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