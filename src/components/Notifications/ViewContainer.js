import react from 'react'
import Container from '../shared/Container'
import View from './View'
import { useTranslation } from 'react-i18next'


const ViewContainer = () => {


  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Notifications"), url: "#" }
  ]

  const tabs = []

  return (
    <Container tabs={tabs} links={links}>
      <div className="tab-content">
        <View />

      </div>
    </Container>
  )

}

export default ViewContainer