import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';

const BlocksIndex = () => {

  const [editBlockId, setEditBlockId] = useState("")
  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "/" },
    { name: t("Blocks"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#block-all" },
    { name: t("Add"), id: "#block-add" },
  ]

  return (
    <>
      {!isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links}>
          <div className="tab-content">

            <List setEditBlockId={setEditBlockId} />
            <Add editBlockId={editBlockId} setEditBlockId={setEditBlockId} />

          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default BlocksIndex