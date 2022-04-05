// CSS
import './Login.scss'
// Components
import SignInCard from '../../components/SignInCard'

const SignIn = () => {
    document.title = 'Argent Bank - Sign In'
    return (
        <main className="signIn">
            <SignInCard />
        </main>
    )
}

export default SignIn
