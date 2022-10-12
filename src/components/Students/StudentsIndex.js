import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const StudentsIndex = () => {

  const { isLoggedIn } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    
    if(!isLoggedIn){
      navigate("/login")
    }
  } , [isLoggedIn])


  const [editStudentId , setEditStudentId] = useState("")

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Students" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Student-all"} ,
    // {name : "Profile" , id : "#Student-profile"} ,
    {name : "Add" , id : "#Student-add"} 
]
 

    return (
      <Container tabs={tabs} links={links}> 

      <div className="tab-content">

         <List setEditStudentId={setEditStudentId} />
         <Add editStudentId={editStudentId} />
        
     
         </div>
      </Container>
    )

}

export default StudentsIndex 