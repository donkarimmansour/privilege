import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'

 
const LevelsIndex = () => {

  const [editGroupeId , setEditGroupeId] = useState("")

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Groupes"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#groupe-all" },
    { name: t("Add"), id: "#groupe-add" },
  ]


    return (
      <Container tabs={tabs} links={links}> 
       <div className="tab-content">
         <List setEditGroupeId={setEditGroupeId}/>
         <Add editGroupeId={editGroupeId} setEditGroupeId={setEditGroupeId}/>
    
         </div> 
      </Container>
    )

}

export default LevelsIndex