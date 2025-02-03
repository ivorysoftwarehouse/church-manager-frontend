import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { deleteDepartment, deleteEvent, getMinistry } from "../../data"

import styles from '../_styles/Ministry.module.css'

function Ministry() {
  const { churchId, ministryId } = useParams()

  const [ministry, setMinistry] = useState(null)

  useEffect(() => {
    getMinistry(churchId, ministryId).then(ministry => setMinistry(ministry))
  }, [churchId, ministryId])

  const removeEvent = (eventId) => {
    deleteEvent(churchId, ministryId, eventId).then(() => {
      const newMinistry = { ...ministry }
      newMinistry.events = newMinistry.events.filter(event => event.id !== eventId)
      setMinistry(newMinistry)
    })
  }

  const removeDepartment = (departmentId) => {
    deleteDepartment(churchId, ministryId, departmentId).then(() => {
      const newMinistry = { ...ministry }
      newMinistry.departments = newMinistry.departments.filter(department => department.id !== departmentId)
      setMinistry(newMinistry)
    })
  }

  return (
    <main className={styles['Ministry']}>
      <h2>{ministry?.name}</h2>

      <h3>Events</h3>

      <ul>
        {
          ministry?.events.map(event => (
            <li key={event.id}>
              <Link to={`/church/${churchId}/ministries/${ministryId}/events/${event.id}`}>
                {event.name}
              </Link>

              <button type="button" onClick={() => removeEvent(event.id)}>
                Delete
              </button>
            </li>
          ))
        }
      </ul>

      <Link to={`/church/${churchId}/ministries/${ministryId}/events/new`}>Add event</Link>

      <h3>Departments</h3>

      <ul>
        {
          ministry?.departments.map(department => (
            <li key={department.id}>
              <Link to={`/church/${churchId}/ministries/${ministryId}/departments/${department.id}`}>
                {department.name}
              </Link>

              <button type="button" onClick={() => removeDepartment(department.id)}>
                Delete
              </button>
            </li>
          ))
        }
      </ul>

      <Link to={`/church/${churchId}/ministries/${ministryId}/departments/new`}>Add department</Link>

    </main>
  )
}

export default Ministry
