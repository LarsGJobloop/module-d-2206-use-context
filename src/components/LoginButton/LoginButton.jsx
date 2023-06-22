import React, { useContext } from "react"
import { userContext } from "../../contexts/userContext"

/**
 * @param {{
 *  Icon?: React.JSX.Element
 * }} props 
 * @returns 
 */
export function LoginButton(props) {
  const {Icon} = props

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
        Icon !== undefined
        ? <Icon />
        : ""
      }
      {
        user === null
        ? "Login as Thomas"
        : "Logout"
      }
    </button>
  )
}