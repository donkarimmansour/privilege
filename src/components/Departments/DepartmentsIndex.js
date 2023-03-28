import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'

 

const DepartmentsIndex = () => {

  const [editDepartmentId, setEditDepartmentId] = useState("")

  const { t } = useTranslation();

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Departments"), url: "#" }
  ]

  const tabs = [
    { name: t("Lis"), id: "#dep-all" },
    { name: t("Add"), id: "#dep-add" },
  ]

    return (
      <Container tabs={tabs} links={links}> 
 

      <div className="tab-content">
    
        <List setEditDepartmentId={setEditDepartmentId} />
         <Add editDepartmentId={editDepartmentId} setEditDepartmentId={setEditDepartmentId} />
      
      </div>
       
      </Container>
    )

}

export default DepartmentsIndex