import { useState } from 'react'
import { userContext } from './contexts/userContext'

import { Main } from './components/Main/Main'

import './App.css'


export default function App() {
  const [user, setUser] = useState(null)

  function login() {
    setUser({
      name: "Thomas",
      age: "37"
    })
  }

  return (
    // Provide the context to some part of our application
    <userContext.Provider value={user}>
      <button onClick={login}>Login as Thomas</button>
      <Main user={user} />
    </userContext.Provider>
  )
}