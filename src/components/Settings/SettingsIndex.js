import react from 'react'
import Container from '../shared/Container'
import Email from './Email'
import Notifications from './Notifications'


const SettingsIndex = () => {

  const links = [
    {name : "Privileg" , url : "#"} ,
    {name : "Setting" , url : "#"} ,
]

const tabs = [
    {name : "Email" , id : "#Email_Settings"} ,
    {name : "Notifications" , id : "#Notifications"} ,
]

    return ( 
      <Container tabs={tabs} links={links}> 
          <div className="tab-content">
            <Email /> 
            <Notifications />
           </div>
      </Container>
    )

}

export default SettingsIndex