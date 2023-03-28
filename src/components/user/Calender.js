import react, { useEffect } from 'react'
import ScheduleSelector from 'react-schedule-selector'
import moment from 'moment';


const Calender = ({schedule, setSchedule, editeble = true}) => {
  
  // useEffect(() => {

  //   const oldSchedule = schedule

  //   const oldS = oldSchedule?.map(date => {

  //     if (date.day === "Sunday") {
  //       return moment(`"2023-01-01 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

  //     } else if (date.day === "Monday") {
  //       return moment(`"2023-01-02 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

  //     } else if (date.day === "Tuesday") {
  //       return moment(`"2023-01-03 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

  //     } else if (date.day === "Wednesday") {
  //       return moment(`"2023-01-04 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

  //     } else if (date.day === "Thursday") {
  //       return moment(`"2023-01-05 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

  //     } else if (date.day === "Friday") {
  //       return moment(`"2023-01-06 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")

  //     } else if (date.day === "Saturday") {
  //       return moment(`"2023-01-07 ${date.time}`).format("YYYY-MM-DDTHH:mm:ss")
  //     } else {
  //       return null
  //     }

  //   })
    

  //   setSchedule(oldS.filter(d => !!d))

  // }, []);



 
  const handleChange = newSchedule => {
     setSchedule(newSchedule)

  }



  //check calindar every day 
  //get current day 
  //get times
  //convert index to half hour

  return (
    <div className="tab-pane active" id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab">
      <div className="card">
        <div className="card-body">

          <div id="calendar">

            <ScheduleSelector
              selection={schedule}
              numDays={6}
              minTime={8}
              maxTime={20}
              hourlyChunks={2}
              dateFormat={"dddd"}
              timeFormat={"HH:mm"}
              rowGap={"0px"}
              unselectedColor={"rgba(138, 140, 255, 0.3)"}
              selectedColor={"rgba(138, 140, 255, 1)"}
              hoveredColor={"rgba(138, 140, 255, 0.6)"}
              selectionScheme={"linear"}
              startDate={moment(`"2023-01-02 00:00`).format("YYYY-MM-DDTHH:mm:ss")}
              onChange={editeble ? handleChange : () => {}}
            />

          </div>
        </div>
      </div>
    </div>

  )

}

export default Calender