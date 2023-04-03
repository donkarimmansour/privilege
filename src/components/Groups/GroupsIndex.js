import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';

const LevelsIndex = () => {

  const [editGroupeId, setEditGroupeId] = useState("")
  const [initAdd, setInitAdd] = useState(false)
  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Groups"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#groupe-all" },
    { name: t("Add"), id: "#groupe-add" , initAdd : true },
  ]


  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links} setInitAdd={setInitAdd}>
          <div className="tab-content">
            <List setEditGroupeId={setEditGroupeId} />
            <Add editGroupeId={editGroupeId} setEditGroupeId={setEditGroupeId}  initAdd={initAdd}/>

          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default LevelsIndex