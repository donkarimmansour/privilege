import react from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'


const NotificationsIndex = () => {

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Notifications" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#notification-all"} ,
    // {name : "Profile" , id : "#Student-profile"} ,
    {name : "Add" , id : "#notification-add"} 
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

export default NotificationsIndex 