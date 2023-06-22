import { useState } from 'react'
import { userContext } from './contexts/userContext'

import { Main } from './components/Main/Main'

import './App.css'
import { LoginButton } from './components/LoginButton/LoginButton'


export default function App() {
  const [user, setUser] = useState(null)

  return (
    // Provide the context to some part of our application
    <userContext.Provider value={{user, setUser}}>

      <header>
        <h1>React Context</h1>
        <LoginButton />
      </header>

      <main>
        <Main user={user} />
      </main>

      <footer>
        &copy; Kodehode
      </footer>

    </userContext.Provider>
  )
}