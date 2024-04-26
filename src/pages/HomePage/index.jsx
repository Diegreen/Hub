import { LoginPage } from "../../components/loginPage"
import { PostProvider } from "../../providers/PostContext"

export const HomePage = () => {
    return (
        <>
          <main>
              <LoginPage />
          </main>
        </>
    )
}