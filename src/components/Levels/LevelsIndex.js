import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'


const LevelIndex = () => {

  const [editLevelId , setEditLevelId] = useState("")

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Level" , url : "#"} ,
]
  
const tabs = [
    {name : "List View" , id : "#Level-all"} ,
    {name : "Add" , id : "#Level-add"} 
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