// Components
import SignInForm from '../SignInForm'
// CSS
import './SignInCard.scss'

const SignInCard = () => {
    return (
        <section className="signInCard">
            <i class="fa fa-user-circle signInCard__icon"></i>
            <h1 className="signInCard__title">Sign In</h1>
            <SignInForm />
        </section>
    )
}

export default SignInCard
