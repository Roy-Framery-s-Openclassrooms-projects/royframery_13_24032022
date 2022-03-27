import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// Css
import './HeaderItem.scss'

const HeaderItem = ({ icon, text }) => {
    return (
        <Link to="/sign-in" className="headerItem">
            <i className={icon}></i>
            <p className="headerItem__text">{text}</p>
        </Link>
    )
}

HeaderItem.protoTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default HeaderItem
