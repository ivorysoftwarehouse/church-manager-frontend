import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { createAttendanceRecord, deleteAttendee, getAttendanceRecords, getEvent } from "../../data"
import { getTimeDisplay } from "../../util"

import styles from "../_styles/Event.module.css"

function Event() {
  const { churchId, ministryId, eventId } = useParams()

  const [event, setEvent] = useState(null)

  useEffect(() => {
    getEvent(churchId, ministryId, eventId).then(event => {
      setEvent(event)
    })
  }, [churchId, eventId, ministryId])

  const getButtonText = (attendee, date) => {
    if (date > new Date().toISOString().split('T')[0]) {
      return 'N/A'
    }

    if (date === new Date().toISOString().split('T')[0]) {
      const record = attendee.attendance_records.find(record => record.date === date)

      if (record) {
        return getTimeDisplay(record.time)
      } else {
        return 'Mark Present'
      }
    }

    const record = attendee.attendance_records.find(record => record.date === date)

    if (record) {
      return getTimeDisplay(record.time)
    } else {
      return 'Absent'
    }
  }

  const addAttendanceRecord = (attendeeId, date) => {
    const time = new Date().getHours() + ':' + new Date().getMinutes().toString().padStart(2, '0')

    createAttendanceRecord(
      churchId, ministryId, eventId, attendeeId,
      { attendee_id: attendeeId, date, time }
    ).then(() => {
      getAttendanceRecords(churchId, ministryId, eventId, attendeeId).then(records => {
        const newEvent = { ...event }
        const attendee = newEvent.attendees.find(attendee => attendee.id === attendeeId)
        attendee.attendance_records = records
        setEvent(newEvent)
      })
    })
  }

  const deletePerson = (id) => {
    deleteAttendee(churchId, ministryId, eventId, id).then(() => {
      const newEvent = { ...event }
      newEvent.attendees = newEvent.attendees.filter(attendee => attendee.id !== id)
      setEvent(newEvent)
    })
  }

  return (
    <main className={styles['Event']}>
      <h2>{event?.name}</h2>

      <h3>Attendees</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            {
              event?.event_dates.sort().map(date => (
                <th key={date}>{date}</th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {event?.attendees.map(attendee => (
            <tr key={attendee.id}>
              <td>
                {attendee.name}
              </td>

              <td>
                <button onClick={() => deletePerson(attendee.id)}>Delete</button>
              </td>

              {event?.event_dates.map(date => (
                <td key={date}>
                  <button
                    onClick={() => addAttendanceRecord(attendee.id, date)}
                    disabled={attendee.attendance_records.some(record => record.date === date) || date !== new Date().toISOString().split('T')[0]}
                  >
                    {getButtonText(attendee, date)}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={`/church/${churchId}/ministries/${ministryId}/events/${eventId}/attendees/new`}>Add Attendee</Link>
      <Link to={`/church/${churchId}/ministries/${ministryId}/events/${eventId}/edit`}>Edit Event</Link>
    </main>
  )
}

export default Event
