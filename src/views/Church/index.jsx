import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getChurch } from "../../data"

import styles from "../_styles/Church.module.css"

function Church() {
  const { id } = useParams()

  const [church, setChurch] = useState(null)

  useEffect(() => {
    getChurch(id)
      .then(church => setChurch(church))
  }, [id])

  return (
    <main className={styles['Church']}>
      <h2>{church?.name}</h2>

      <h3>Ministries</h3>

      <ul>
        {church?.ministries.map(ministry => (
          <li key={ministry.id}>
            <Link to={`/church/${id}/ministries/${ministry.id}`}>{ministry.name}</Link>
          </li>
        ))}
      </ul>

      <Link to={`/church/${id}/ministries/new`}>New Ministry</Link>
    </main>
  )
}

export default Church
