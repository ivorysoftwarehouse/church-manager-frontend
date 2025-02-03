import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { createTrackRecord, getTrackRecords, getDepartment, createDepartmentMeetingDate } from "../../data"
import { getTimeDisplay } from "../../util"

import styles from "../_styles/Department.module.css"

function Department() {
  const { churchId, ministryId, departmentId } = useParams()

  const [department, setDepartment] = useState(null)

  useEffect(() => {
    getDepartment(churchId, ministryId, departmentId).then(department => {
      setDepartment(department)
    })
  }, [churchId, departmentId, ministryId])

  const addMeetingDate = event => {
    event.preventDefault()

    const date = event.target[0].value

    createDepartmentMeetingDate(churchId, ministryId, departmentId, date).then(() => {
      getDepartment(churchId, ministryId, departmentId).then(department => {
        setDepartment(department)
      })
    })
  }

  const getButtonText = (member, date) => {
    if (date > new Date().toISOString().split('T')[0]) {
      return 'N/A'
    }

    if (date === new Date().toISOString().split('T')[0]) {
      const record = member.track_records.find(record => record.date === date)

      if (record) {
        return getTimeDisplay(record.time)
      } else {
        return 'Mark Present'
      }
    }

    const record = member.track_records.find(record => record.date === date)

    if (record) {
      return getTimeDisplay(record.time)
    } else {
      return 'Absent'
    }
  }

  const addTrackRecord = (memberId, date) => {
    const time = new Date().getHours() + ':' + new Date().getMinutes().toString().padStart(2, '0')

    createTrackRecord(
      churchId, ministryId, departmentId, memberId,
      { member_id: memberId, date, time }
    ).then(() => {
      getTrackRecords(churchId, ministryId, departmentId, memberId).then(records => {
        const newDepartment = { ...department }
        const member = newDepartment.members.find(member => member.id === memberId)
        member.track_records = records
        setDepartment(newDepartment)
      })
    })
  }

  return (
    <main className={styles['Department']}>
      <h2>{department?.name}</h2>

      <h3>Members</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            {
              department?.meeting_dates.sort().map(date => (
                <th key={date}>{date}</th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {department?.members.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              {department?.meeting_dates.map(date => (
                <td key={date}>
                  <button
                    onClick={() => addTrackRecord(member.id, date)}
                    disabled={member.track_records.some(record => record.date === date) || date !== new Date().toISOString().split('T')[0]}
                  >
                    {getButtonText(member, date)}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={`/church/${churchId}/ministries/${ministryId}/departments/${departmentId}/members/new`}>Add Member</Link>

      <form onSubmit={addMeetingDate}>
        <h3>Add meeting date</h3>

        <label>
          Date
          <input type="date" />
        </label>

        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default Department
