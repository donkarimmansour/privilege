import { useState } from 'react'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'

 

const DepartmentsIndex = () => {

  const [editDepartmentId , setEditDepartmentId] = useState("")

  const links = [ 
    {name : "Privilege" , url : "#"} ,
    {name : "Departments" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Dep-all"} ,
    {name : "Add" , id : "#Dep-add"} ,
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