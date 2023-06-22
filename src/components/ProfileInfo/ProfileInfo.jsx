import { useContext } from "react"
import { userContext } from "../../contexts/userContext"

export function ProfileInfo(props) {
  // Extract the context information where we need it
  const user = useContext(userContext)
  console.log(user)

  return (
    <div>
      <h2>Profil Info</h2>
      {
        user === null
        ? <h3>Loading user info</h3>
        : <h3>Name: {user.name} Age: {user.age}</h3>
      }
    </div>
  )
}