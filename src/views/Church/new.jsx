import { createChurch } from "../../data"
import styles from "../_styles/Churches.module.css"

function NewChurch() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const name = formData.get("name")

    createChurch({ name })
      .then(() => {
        form.reset()
        alert("Church created successfully!")
      })
      .catch(() => {
        alert("Failed to create church")
      })
  }

  return (
    <main className={styles['NewChurch']}>
      <h1>Create a new church</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <button type="submit">Create</button>
      </form>
    </main>
  )
}

export default NewChurch
