import { LoginButton } from "../LoginButton/LoginButton"
import { ProfileInfo } from "../ProfileInfo/ProfileInfo"

export function Main(props) {
  return (
    <main>
      <section>
        <h2>Section 1</h2>
        <LoginButton />
      </section>

      <section>
        <ProfileInfo />
      </section>
    </main>
  )
}
