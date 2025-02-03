import { useParams } from 'react-router-dom'
import { createEvent } from '../../data'

import styles from '../_styles/Event.module.css'
import { useState } from 'react'

function NewEvent() {
  const { churchId, ministryId } = useParams()

  const [newDate, setNewDate] = useState('')
  const [dates, setDates] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = event.target[0].value

    createEvent(churchId, ministryId, { name, event_dates: dates, ministry_id: ministryId })
      .then(() => {
        alert('Event created!')
      })
      .catch(() => {
        alert('An error occurred')
      })
  }

  return (
    <main className={styles['NewEvent']}>
      <h2>New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text" />

        <h3>Dates</h3>
        <ul>
          {
            dates.sort().map((date) => (
              <li key={date}>
                <p>{date}</p>
                <button type="button" onClick={() => setDates(dates.filter(d => d !== date))}>
                  Remove
                </button>
              </li>
            ))
          }
          <li>
            <input type="date" value={newDate} onChange={(event) => setNewDate(event.target.value)} />
            <button type="button" onClick={() => {
              setDates([...dates, newDate])
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

export default NewEvent
