import  { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'



const LibraryIndex = () => {
  const [editLibraryId , setEditLibraryId] = useState("")

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Library"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#library-all" },
    { name: t("Add"), id: "#library-add" },
  ]

    return (
      <Container tabs={tabs} links={links}> 
            <div className="tab-content">
 
            <List setEditLibraryId={setEditLibraryId} />
            <Add editLibraryId={editLibraryId} setEditLibraryId={setEditLibraryId}/>
     
      </div> 
      </Container>
    )

}

export default LibraryIndex  