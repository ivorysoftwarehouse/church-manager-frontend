import { useParams } from 'react-router-dom'
import { createAttendee } from '../../data'

import styles from '../_styles/Attendee.module.css'

function NewAttendee() {
  const { churchId, ministryId, eventId } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = event.target[0].value

    createAttendee(churchId, ministryId, eventId, { name, event_id: eventId })
      .then(() => {
        alert('Attendee created!')
      })
      .catch(() => {
        alert('An error occurred')
      })
  }

  return (
    <main className={styles['NewAttendee']}>
      <h2>New Attendee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text" />
        <button type="submit">Save</button>
      </form>
    </main>
  )
}

export default NewAttendee
