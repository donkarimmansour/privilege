import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const DepartmentsIndex = () => {

  const [editDepartmentId, setEditDepartmentId] = useState("")

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "/" },
    { name: t("Departments"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#dep-all" },
    { name: t("Add"), id: "#dep-add" },
  ]

  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links}>


          <div className="tab-content">

            <List setEditDepartmentId={setEditDepartmentId} />
            <Add editDepartmentId={editDepartmentId} setEditDepartmentId={setEditDepartmentId} />

          </div>

        </Container>

        : <Navigate to="/profile" />}
    </>
  )

}

export default DepartmentsIndex