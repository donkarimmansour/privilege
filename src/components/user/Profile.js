import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { checkRole } from '../../common/funs'
import StudList from '../Notifications/StudList'
import Container from '../shared/Container'
import Calender from './Calender'
import Edit from './Edit'



const Profile = () => { 

  const { t } = useTranslation();
  const { user } = useSelector(state => state.auth)

  const links= [
    { name: t("Privilege"), url: "#" },
    { name: t("My Profile"), url: "#" }
  ]

  const [tabs, setTabs] = useState([{ name: t("Profile"), id: "#pills-profile" }])

  useEffect(() => {
    if (user.role === "student") {
      setTabs([...tabs,
        { name: t("Calendar"), id: "#pills-calendar" },
        { name: t("Notifications"), id: "#pills-notification" }
      ])

    } if (user.role === "teacher") {
      setTabs([...tabs, { name: t("Calendar"), id: "#pills-calendar" }])
      
    }
  }, [user])

  

  return (
    <Container tabs={tabs} links={links}>
      <div className="row clearfix">

        <div className="col-md-12">
          <div className="tab-content" id="pills-tabContent">

            {checkRole(user.role, "studentOrteacher") && <Calender />}

            {checkRole(user.role, "student") && <StudList />}

            <Edit />

          </div>
        </div>
      </div>
    </Container>
  )

}

export default Profile