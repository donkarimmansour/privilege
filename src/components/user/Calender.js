import react, { useEffect, useState } from 'react'
import ScheduleSelector from 'react-schedule-selector'
import moment from 'moment';
import { getSingleGroupe } from '../../redux/groupes/action';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


const Calender = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)
  const [schedule, setSchedule] = useState([])
  const { singleGroupe } = useSelector(state => state.groupe)
  const { t } = useTranslation();

  //get groupe data
  useEffect(() => {

    if (user.role === "student") {
      if (user && user.group) {
        dispatch(getSingleGroupe({ filter: { _id: user.group } }))
      }
    } if (user.role === "teacher") {
        dispatch(getSingleGroupe({ filter: { teacher: user._id } }))
    
    }

     
  }, [dispatch, user])



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




  const handleChange = newSchedule => { }


  return (
    <div className="tab-pane" id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab">

      <div className="card">
        <div className="card-body">


        <ul className="list-group mb-3" >

            {user.role === "student" ?
              <>
                <li className="list-group-item d-flex justify-content-between align-items-center">{t("Hours")} <span className="badge badge-primary badge-pill">{user.hours}</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">{t("Group")} <span className="badge badge-primary badge-pill">{singleGroupe?.name}</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">{t("Teacher")} <span className="badge badge-primary badge-pill">{`${singleGroupe?.teachers?.firstname} ${singleGroupe?.teachers?.lastname}`}</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">{t("department")} <span className="badge badge-primary badge-pill">{`${singleGroupe?.departments?.floorName} - ${singleGroupe?.departments?.className}`}</span></li>
              </>
              : user.role === "teacher" ? <>
                <li className="list-group-item d-flex justify-content-between align-items-center">{t("Group")} <span className="badge badge-primary badge-pill">{singleGroupe?.name}</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">{t("department")} <span className="badge badge-primary badge-pill">{`${singleGroupe?.departments?.floorName} - ${singleGroupe?.departments?.className}`}</span></li>
              </> : <></>
            }

          </ul>

          <div id="calendar">

            <ScheduleSelector
              selection={schedule}
              numDays={6}
              minTime={9}
              maxTime={22}
              hourlyChunks={2}
              dateFormat={"dddd"}
              timeFormat={"HH:mm"}
              rowGap={"0px"}
              unselectedColor={"rgba(138, 140, 255, 0.3)"}
              selectedColor={"rgba(138, 140, 255, 1)"}
              hoveredColor={"rgba(138, 140, 255, 0.6)"}
              selectionScheme={"linear"}
              startDate={moment(`"2023-01-02 00:00`).format("YYYY-MM-DDTHH:mm:ss")}
              onChange={handleChange}
            />

          </div>
        </div>
      </div>
    </div>

  )

}

export default Calender