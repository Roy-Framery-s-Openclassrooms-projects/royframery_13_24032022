import { Link } from 'react-router-dom'
// CSS
import './SignInForm.scss'

const SignInForm = () => {
    return (
        <form action="" className="form">
            <div className="form__input-wrapper">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="form__input-wrapper">
                <label for="password">Password</label>
                <input type="text" name="password" id="password" />
            </div>
            <div className="form__input-remember">
                <input type="checkbox" name="remeberMe" id="rememberMe" />
                <label for="rememberMe">Remember me</label>
            </div>
            <Link to="/profile" className="form__button">
                Sign In
            </Link>
        </form>
    )
}

export default SignInForm
