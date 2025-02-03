import { useParams } from 'react-router-dom'
import { createDepartment } from '../../data'

import styles from '../_styles/Department.module.css'

function NewDepartment() {
  const { churchId, ministryId } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = event.target[0].value

    createDepartment(churchId, ministryId, { name, ministry_id: ministryId })
      .then(() => {
        alert('Department created!')
      })
      .catch(() => {
        alert('An error occurred')
      })
  }

  return (
    <main className={styles['NewDepartment']}>
      <h2>New Department</h2>
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

export default NewDepartment
