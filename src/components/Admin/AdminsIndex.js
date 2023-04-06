import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'
import { checkRole } from '../../common/funs'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'


const AdminsIndex = () => {

  const [editAdminId, setEditAdminId] = useState("")

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "/" },
    { name: t("Admins"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#admin-all" },
    { name: t("Add"), id: "#admin-add" },
  ]

  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "superAdmin") ?

        <Container tabs={tabs} links={links}>

          <div className="tab-content">

            <List setEditAdminId={setEditAdminId} />
            <Add editAdminId={editAdminId} setEditAdminId={setEditAdminId} />


          </div>
        </Container>

        : <Navigate to="/profile" />}
    </>)

}

export default AdminsIndex