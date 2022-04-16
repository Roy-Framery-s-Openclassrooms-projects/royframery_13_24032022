import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
// actions
import { logOut } from '../../features/user'
// Css
import './HeaderItem.scss'

const HeaderItem = ({ icon, text, path }) => {
    const dispatch = useDispatch()
    const isLogOutButton = text === 'Sign Out'
    const navigate = useNavigate()

    const handdleLogOut = (e) => {
        e.preventDefault()
        dispatch(logOut())
        localStorage.clear()
        navigate('/')
    }

    return (
        <>
            {isLogOutButton ? (
                <Link to={path} className="headerItem" onClick={handdleLogOut}>
                    <i className={icon}></i>
                    <p className="headerItem__text">{text}</p>
                </Link>
            ) : (
                <Link to={path} className="headerItem">
                    <i className={icon}></i>
                    <p className="headerItem__text">{text}</p>
                </Link>
            )}
        </>
    )
}

HeaderItem.protoTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default HeaderItem
