import react, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


const Calender = () => {
 
  const { t } = useTranslation();
  // const dispatch = useDispatch()
  // const { loading, error, success, calender } = useSelector(state => state.user)

  // useEffect(() => {
  //   if (success) { } else if (error) { }
  // }, [success, error]);



  const handleDateSelect = (selectInfo) => {
    let title = window.prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: 'createEventId()',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }



  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  if (dd < 10) { dd = '0' + dd }
  if (mm < 10) { mm = '0' + mm }

  const current = yyyy + '-' + mm + '-';


  return (
    <div className="tab-pane fade " id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab">
      <div className="card">
        <div className="card-body">
          {/* <div id="calendar" /> */}
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'title',
              center: '',
              right: 'prev,dayGridMonth,timeGridWeek,timeGridDay,next'
            }}

            editable={true}
            droppable={true}
            eventLimit={true} // allow "more" link when too many events
            selectable={true}

            events={[
              {
                title: 'Birthday Party',
                start: current + '01',
                className: 'bg-info'
              }, {
                title: 'Conference',
                start: current + '05',
                end: '2018-08-07',
                className: 'bg-warning'
              }, {
                title: 'Meeting',
                start: current + '09T12:30:00',
                allDay: true, // will make the time show
                className: 'bg-success',
              }
            ]}

            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed

            select={handleDateSelect}
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </div>

  )

}

export default Calender