import react from 'react'
import Container from '../shared/Container'
import Email from './Email'


const SettingsIndex = () => {

  const links = [
    {name : "Privileg" , url : "#"} ,
    {name : "Setting" , url : "#"} ,
]

const tabs = [
    {name : "Email" , id : "#Email_Settings"} ,
]

    return ( 
      <Container tabs={tabs} links={links}> 
          <div className="tab-content">
            <Email /> 
           </div>
      </Container>
    )

}

export default SettingsIndex