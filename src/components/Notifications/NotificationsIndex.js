import react from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'


const NotificationsIndex = () => {


  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Notifications"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#notification-all" },
    { name: t("Add"), id: "#notification-add" },
  ]

  return (
    <Container tabs={tabs} links={links}>
      <div className="tab-content">
        <List />
        <Add />

      </div>
    </Container>
  )

}

export default NotificationsIndex 