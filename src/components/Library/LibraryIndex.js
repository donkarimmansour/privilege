import { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';


const LibraryIndex = () => {
  const [editLibraryId, setEditLibraryId] = useState("")

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Library"), url: "#" }
  ]

  const [tabs, setTabs] = useState([{ name: t("List"), id: "#library-all" }])

  useEffect(() => {
    if (user.role === "superAdmin") {
      setTabs([...tabs, { name: t("Add"), id: "#library-add" }])
    }
  }, [user])


  return ( 

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?
        <Container tabs={tabs} links={links}>
          <div className="tab-content">

            <List setEditLibraryId={setEditLibraryId} />

            {checkRole(user.role, "superAdmin") && <Add editLibraryId={editLibraryId} setEditLibraryId={setEditLibraryId} />}

          
          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default LibraryIndex