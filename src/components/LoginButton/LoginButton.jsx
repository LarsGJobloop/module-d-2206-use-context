import { useContext } from "react"
import { userContext } from "../../contexts/userContext"

export function LoginButton() {
  const {user, setUser} = useContext(userContext)

  function login() {
    setUser({
      name: "Thomas",
      age: "37"
    })
  }

  function logout() {
    setUser(null)
  }

  return (
    <button
      onClick={
        user === null
        ? login
        : logout
      }
    >
      {
        user === null
        ? "Login as Thomas"
        : "Logout"
      }
    </button>
  )
}