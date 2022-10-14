import react, { useState } from 'react'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const CoursesIndex = () => {

  const [editCourseId , setEditCourseId] = useState("")


  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Courses" , url : "#"} 
  ]
 
    const tabs = [
        {name : "List View" , id : "#Courses-all"} ,
        {name : "Add" , id : "#Courses-add"} ,
    ]
 

    return (
      <Container tabs={tabs} links={links}> 
      
       <div className="tab-content">

         <List setEditCourseId={setEditCourseId} />
         <Add editCourseId={editCourseId} setEditCourseId={setEditCourseId}/>

       


     
     
      </div>
      </Container>
    )

}

export default CoursesIndex