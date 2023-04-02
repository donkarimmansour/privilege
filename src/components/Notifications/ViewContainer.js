import react from 'react'
import Container from '../shared/Container'
import View from './View'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';


const ViewContainer = () => {
  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Notifications"), url: "#" }
  ]

  const tabs = []

  return (
    <>
      {!isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "student") ?
        <Container tabs={tabs} links={links}>

          <div className="tab-content">
            <View />

          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default ViewContainer