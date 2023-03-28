import  { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Container from '../shared/Container'
import List from './List'



const BillsIndex = () => {

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Bills"), url: "#" }
  ]
  
  const tabs = [
    { name: t("List"), id: "#fees-all" }
  ]

  return (
    <Container tabs={tabs} links={links}>
      <div className="tab-content">

        <List />

      </div>
    </Container>
  )

}

export default BillsIndex