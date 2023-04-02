import react from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';
import Container from '../shared/Container'
import Email from './Email'


const SettingsIndex = () => {

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privileg"), url: "#" },
    { name: t("Settings"), url: "#" },
  ]

  const tabs = [
    { name: t("Email"), id: "#email_settings" },
  ]

  return (
    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "superAdmin") ?

        <Container tabs={tabs} links={links}>
          <div className="tab-content">
            <Email />
          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default SettingsIndex