import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'


const StudentsIndex = () => {

  const [editStudentId , setEditStudentId] = useState("")

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Students" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Student-all"} ,
    {name : "Add" , id : "#Student-add"} 
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