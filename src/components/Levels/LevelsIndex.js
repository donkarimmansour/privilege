import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';

const LevelIndex = () => {

  const [editLevelId, setEditLevelId] = useState("")
  const [initAdd, setInitAdd] = useState(false)
  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "/" },
    { name: t("Levels"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#level-all" },
    { name: t("Add"), id: "#level-add" , initAdd : true },
  ]

  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?
        <Container tabs={tabs} links={links} setInitAdd={setInitAdd}>
          <div className="tab-content">
            <List setEditLevelId={setEditLevelId} />
            <Add editLevelId={editLevelId} setEditLevelId={setEditLevelId}  initAdd={initAdd}/>



          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default LevelIndex