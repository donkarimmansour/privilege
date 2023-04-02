import react from 'react'
import ScheduleSelector from 'react-schedule-selector'
import moment from 'moment';


const Calender = ({schedule, setSchedule}) => {

 
  const handleChange = newSchedule => {
     setSchedule(newSchedule)
  }

  
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
              onChange={handleChange}
            />

          </div>
        </div>
      </div>
    </div>

  )

}

export default Calender