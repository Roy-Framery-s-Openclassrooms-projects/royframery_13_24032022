import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Thunk
import { getToken } from '../../features/user'
// Selectors
import { selectStatus, selectError, selectToken } from '../../utils/selectors'
// CSS
import './SignInForm.scss'

const SignInForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)
    const token = useSelector(selectToken)

    const Login = (event) => {
        event.preventDefault()
        dispatch(getToken(username, password))
    }

    useEffect(() => {
        if (status === 'resolved') {
            if (!window.localStorage.getItem('token') && checked) {
                window.localStorage.setItem('token', token)
            }
            navigate('/profile')
        }
    }, [checked, navigate, status, token])

    return (
        <form
            action=""
            className="form"
            data-error={status === 'rejected' ? error : ''}
        >
            <div className="form__input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value.trim())}
                />
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                />
            </div>
            <div className="form__input-remember">
                <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="form__button" onClick={Login}>
                Sign In
            </button>
        </form>
    )
}

export default SignInForm
