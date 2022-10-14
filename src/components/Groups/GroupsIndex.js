import react, { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'

 
const LevelsIndex = () => {

  const [editGroupeId , setEditGroupeId] = useState("")

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Groupes" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Groupe-all"} ,
    {name : "Add" , id : "#Groupe-add"} 
]
 

    return (
      <Container tabs={tabs} links={links}> 
       <div className="tab-content">
         <List setEditGroupeId={setEditGroupeId}/>
         <Add editGroupeId={editGroupeId} setEditGroupeId={setEditGroupeId}/>
    
         </div> 
      </Container>
    )

}

export default LevelsIndex