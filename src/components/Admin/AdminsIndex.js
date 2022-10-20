import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'


const AdminsIndex = () => {

  const [editAdminId , setEditAdminId] = useState("")

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Admins" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Admin-all"} ,
    {name : "Add" , id : "#Admin-add"} 
]
 

    return (
      <Container tabs={tabs} links={links}> 

         <div className="tab-content">

         <List setEditAdminId={setEditAdminId} />
         <Add editAdminId={editAdminId} setEditAdminId={setEditAdminId}/>
        
     
         </div>
      </Container>
    )

}

export default AdminsIndex 