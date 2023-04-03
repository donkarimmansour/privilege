import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const PaymentsIndex = () => {

  const { user, isLoggedIn } = useSelector(state => state.auth)

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Fees"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#fees-all" },
    { name: t("Add"), id: "#fees-add" },
  ]

  return (

    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

        <Container tabs={tabs} links={links}>
          <div className="tab-content">

            <List />
            <Add />

          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default PaymentsIndex