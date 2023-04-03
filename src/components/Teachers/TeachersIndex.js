import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { checkRole } from '../../common/funs'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'
import ListGrid from './ListGrid'


const TeachersIndex = () => {
  const [editTeacherId, setEditTeacherId] = useState("")

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)
  const [initAdd, setInitAdd] = useState(false)

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Teachers"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#pro-all" },
    { name: t("Grid"), id: "#pro-grid" },
    { name: t("Add"), id: "#pro-add" , initAdd : true },,
  ]

  return (
    <> 
       { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links} setInitAdd={setInitAdd}>
          <div className="tab-content">

            <List setEditTeacherId={setEditTeacherId} />
            <Add editTeacherId={editTeacherId} setEditTeacherId={setEditTeacherId} />
            <ListGrid setEditTeacherId={setEditTeacherId} initAdd={initAdd}/>

          </div>
        </Container>

        : <Navigate to="/profile" /> }
    </>
  )

}

export default TeachersIndex