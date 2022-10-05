import react from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'


const LevelsIndex = () => {

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Groupes" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Student-all"} ,
    // {name : "Profile" , id : "#Student-profile"} ,
    {name : "Add" , id : "#Student-add"} 
]
 

    return (
      <Container tabs={tabs} links={links}> 
    <div className="tab-content">
         <List />
         <Add />
    
         </div>
      </Container>
    )

}

export default LevelsIndex