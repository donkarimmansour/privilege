import Container from '../shared/Container'
import Calender from './Calender'
import Edit from './Edit'



const Profile = () => { 

  const links = [
    { name: "Ericsson", url: "#" },
    { name: "My Profile", url: "#" },
  ]

  const tabs = [
    // { name: "Calendar", id: "#pills-calendar" },
    { name: "Profile", id: "#pills-profile" }
  ]


  return (
    <Container tabs={tabs} links={links}>
      <div className="row clearfix">

        <div className="col-md-12">
          <div className="tab-content" id="pills-tabContent">

            {/* <Calender /> */}

            <Edit />

          </div>
        </div>
      </div>
    </Container>
  )

}

export default Profile