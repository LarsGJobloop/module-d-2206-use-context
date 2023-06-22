import { useState, createContext, useContext } from 'react'
import './App.css'

// First we have create a context object
const userContext = createContext(null)

export default function App() {
  const [user, setUser] = useState({
    name: "Lars G",
    age: "33",
  })

  return (
    // Provide the context to some part of our application
    <userContext.Provider value={user}>
      <Main user={user} />
    </userContext.Provider>
  )
}

function Main(props) {
  return (
    <main>
      <section>
        <h2>Section 1</h2>
      </section>

      <section>
        <ProfileInfo />
      </section>
    </main>
  )
}

function ProfileInfo(props) {
  // Extract the context information where we need it
  const user = useContext(userContext)
  console.log(user)

  return (
    <div>
      <h2>Profil Info</h2>
      <h3>Name: {user.name} Age: {user.age}</h3>
    </div>
  )
}