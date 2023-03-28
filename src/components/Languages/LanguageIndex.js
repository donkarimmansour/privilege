import react, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const LanguageIndex = () => {

  const [editLanguageId, setEditLanguageId] = useState("")
  
  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Languages"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#languages-all" },
    { name: t("Add"), id: "#languages-add" },
  ]

    return (
      <Container tabs={tabs} links={links}> 
      
       <div className="tab-content">

         <List setEditLanguageId={setEditLanguageId} />
         <Add editLanguageId={editLanguageId} setEditLanguageId={setEditLanguageId}/>

      
     
      </div>
      </Container>
    )

}

export default LanguageIndex