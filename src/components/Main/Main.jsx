import { LoginButton } from "../LoginButton/LoginButton"
import { ProfileInfo } from "../ProfileInfo/ProfileInfo"

export function Main() {
  return (
    <main>
      <section>
        <h2>Section 1</h2>
        <LoginButton Icon={MockIcon} />
      </section>

      <section>
        <ProfileInfo />
      </section>
    </main>
  )
}

function MockIcon() {
  return (
    <p>Mock Icon</p>
  )
}