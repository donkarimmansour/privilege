import react, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const LanguageIndex = () => {

  const [editLanguageId, setEditLanguageId] = useState("")

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Languages"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#languages-all" },
    { name: t("Add"), id: "#languages-add" },
  ]

  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links}>

          <div className="tab-content">

            <List setEditLanguageId={setEditLanguageId} />
            <Add editLanguageId={editLanguageId} setEditLanguageId={setEditLanguageId} />



          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default LanguageIndex