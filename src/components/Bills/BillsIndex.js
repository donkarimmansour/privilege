import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';
import Container from '../shared/Container'
import ArchivedList from './ArchivedList';
import List from './List'



const BillsIndex = () => {

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "/" },
    { name: t("Bills"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#fees-all" },
    { name: t("Archived"), id: "#archived-all" },
  ]

  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links}>
          <div className="tab-content">

            <ArchivedList />
            <List />

          </div>
        </Container>

        : <Navigate to="/profile" />}
    </>
  )

}

export default BillsIndex