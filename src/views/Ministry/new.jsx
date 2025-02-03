import { useParams } from "react-router-dom"
import { createMinistry } from "../../data"
import styles from "../_styles/Ministry.module.css"

function NewMinistry() {
  const { churchId } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const name = formData.get("name")

    createMinistry(churchId, { name, church_id: churchId })
      .then(() => {
        form.reset()
        alert("Ministry created successfully!")
      })
      .catch(() => {
        alert("Failed to create ministry")
      })
  }

  return (
    <main className={styles['NewMinistry']}>
      <h1>Create a new ministry</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <button type="submit">Create</button>
      </form>
    </main>
  )
}

export default NewMinistry
