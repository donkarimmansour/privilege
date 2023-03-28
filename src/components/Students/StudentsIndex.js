import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'


const StudentsIndex = () => {

  const [editStudentId , setEditStudentId] = useState("")

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Students"), url: "#" }
  ]

  const tabs = [
    { name: t("List"), id: "#student-all" },
    { name: t("Add"), id: "#student-add" },
  ]

    return (
      <Container tabs={tabs} links={links}> 

         <div className="tab-content">

         <List setEditStudentId={setEditStudentId} />
         <Add editStudentId={editStudentId} setEditStudentId={setEditStudentId}/>
        
     
         </div>
      </Container>
    )

}

export default StudentsIndex 