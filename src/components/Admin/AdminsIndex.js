import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'


const AdminsIndex = () => {

  const [editAdminId , setEditAdminId] = useState("")

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Admins"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#admin-all" },
    { name: t("Add"), id: "#admin-add" },
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