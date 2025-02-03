import { useParams } from 'react-router-dom'
import { createMember } from '../../data'

import styles from '../_styles/Member.module.css'

function NewMember() {
  const { churchId, ministryId, departmentId } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = event.target[0].value

    createMember(churchId, ministryId, departmentId, { name, department_id: departmentId })
      .then(() => {
        alert('Member created!')
      })
      .catch(() => {
        alert('An error occurred')
      })
  }

  return (
    <main className={styles['NewMember']}>
      <h2>New Member</h2>
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

export default NewMember
