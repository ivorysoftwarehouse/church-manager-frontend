import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import styles from "../_styles/Churches.module.css"
import { getChurches } from "../../data"

function Churches() {
  const [churches, setChurches] = useState([])

  useEffect(() => {
    getChurches().then((data) => {
      setChurches(data)
    })
  }, [])

  return (
    <main className={styles['Churches']}>
      <h1>Churches</h1>

      <Link to="church/new">Create a new church</Link>

      <h2>All Churches</h2>

      <ul>
        {churches.map((church) => (
          <li key={church.id}>
            <Link to={`/church/${church.id}`}>{church.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Churches
