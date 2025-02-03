import { useParams } from 'react-router-dom'
import { getEvent, updateEvent } from '../../data'

import styles from '../_styles/Event.module.css'
import { useEffect, useState } from 'react'

function EditEvent() {
  const { churchId, ministryId, eventId } = useParams()
  const [event, setEvent] = useState(null)

  const [newDate, setNewDate] = useState('')

  useEffect(() => {
    getEvent(churchId, ministryId, eventId).then(event => {
      setEvent(event)
    })
  }, [churchId, eventId, ministryId])

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target[0].value

    updateEvent(churchId, ministryId, eventId, { name, event_dates: event.event_dates }).then(() => {
      alert('Event updated')
    })
  }

  return (
    <main className={styles['EditEvent']}>
      <h2>Edit Event</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text" defaultValue={event?.name} />

        <h3>Dates</h3>
        <ul>
          {
            event?.event_dates.sort().map((date) => (
              <li key={date}>
                <p>{date}</p>
                <button type="button" onClick={() => {
                  const newEvent = { ...event }
                  newEvent.event_dates = newEvent.event_dates.filter(d => d !== date)
                  setEvent(newEvent)
                }}>
                  Remove
                </button>
              </li>
            ))
          }

          <li>
            <input type="date" value={newDate} onChange={(event) => setNewDate(event.target.value)} />
            <button type="button" onClick={() => {
              const newEvent = { ...event }
              if (!newEvent.event_dates) {
                newEvent.event_dates = []
              }
              newEvent.event_dates.push(newDate)
              setEvent(newEvent)
              setNewDate('')
            }}>
              Add Date
            </button>
          </li>
        </ul>
        <button type="submit">Save</button>
      </form>
    </main>
  )
}

export default EditEvent
