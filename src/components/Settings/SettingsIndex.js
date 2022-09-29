import react from 'react'
import Container from '../shared/Container'
import Company from './Company'
import Email from './Email'
import Invoice from './Invoice'
import Localization from './Localization'
import Notifications from './Notifications'
import Password from './Password'
import Permissions from './Permissions'


const SettingsIndex = () => {

  const links = [
    {name : "Ericsson" , url : "#"} ,
    {name : "Setting" , url : "#"} ,
]

const tabs = [
    {name : "Company" , id : "#Company_Settings"} ,
    {name : "Localization" , id : "#Localization"} ,
    {name : "Roles & Permissions" , id : "#Roles_Permissions"} ,
    {name : "Email" , id : "#Email_Settings"} ,
    {name : "Invoice" , id : "#Invoice_Settings"} ,
    {name : "Notifications" , id : "#Notifications"} ,
    {name : "Change Password" , id : "#Change_Password"} ,
]

    return ( 
      <Container tabs={tabs} links={links}> 
          <div className="tab-content">
            <Company />
            <Localization />
            <Permissions />
            <Email />
            <Notifications />
            <Invoice />
            <Password />
            <Company />
            <Company />
           </div>
      </Container>
    )

}

export default SettingsIndex