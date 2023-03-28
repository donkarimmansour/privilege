import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'


const LevelIndex = () => {

  const [editLevelId , setEditLevelId] = useState("")

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Levels"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#level-all" },
    { name: t("Add"), id: "#level-add" },
  ]

    return (
      <Container tabs={tabs} links={links}> 
    <div className="tab-content">
         <List setEditLevelId={setEditLevelId}/>
         <Add editLevelId={editLevelId} setEditLevelId={setEditLevelId}/>
        
      
         
         </div>
      </Container>
    )

}

export default LevelIndex