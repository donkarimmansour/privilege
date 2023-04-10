import react from 'react'
import List from './List'
import Container from '../shared/Container'
import { useTranslation } from 'react-i18next'
import { checkRole } from '../../common/funs'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import ArchivedList from './ArchivedList'


const ArchivedStudentsIndex = () => {

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "/" },
    { name: t("Archived Students"), url: "#" }
  ]

  const tabs = [{ name: t("List"), id: "#student-all" }]


  return (
    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?
        <Container tabs={tabs} links={links}>

          <div className="tab-content">

            <ArchivedList />

          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default ArchivedStudentsIndex