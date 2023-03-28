import moment from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleGroupe } from '../../redux/groupes/action'
import StudList from '../Notifications/StudList'
import Container from '../shared/Container'
import Calender from './Calender'
import Edit from './Edit'



const Profile = () => { 

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [schedule, setSchedule] = useState([])
  const { singleGroupe } = useSelector(state => state.groupe)
  const { user } = useSelector(state => state.auth)


  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("My Profile"), url: "#" }
  ]

  const tabs = [
    { name: t("Calendar"), id: "#pills-calendar" },
    { name: t("Profile"), id: "#pills-profile" },
    { name: t("Notificatiosn"), id: "#pills-notification" },
  ]

    //get groupe data
    useEffect(() => {
      //if (user && user.group) {
        dispatch(getSingleGroupe({ filter: { _id: "641f19b57412ae40e40423d6" } }))
      //}
    }, [dispatch, user])


    console.log(singleGroupe)


  //update groupe data
  useEffect(() => {
    if (singleGroupe && singleGroupe._id) {

      const newSchedule = singleGroupe.calindar?.map(date => {

        if (date.day === "Sunday") {
          return moment(`"2023-01-01 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Monday") {
          return moment(`"2023-01-02 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Tuesday") {
          return moment(`"2023-01-03 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Wednesday") {
          return moment(`"2023-01-04 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Thursday") {
          return moment(`"2023-01-05 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Friday") {
          return moment(`"2023-01-06 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

        } else if (date.day === "Saturday") {
          return moment(`"2023-01-07 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")
        } else {
          return null
        }

      }).filter(d => !!d)

      setSchedule(newSchedule)

    }
  }, [singleGroupe])


  return (
    <Container tabs={tabs} links={links}>
      <div className="row clearfix">

        <div className="col-md-12">
          <div className="tab-content" id="pills-tabContent">

            <Calender schedule={schedule} setSchedule={setSchedule} editeble={false}/>

            <StudList />

            <Edit />

          </div>
        </div>
      </div>
    </Container>
  )

}

export default Profile