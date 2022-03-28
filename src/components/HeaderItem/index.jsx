import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// Css
import './HeaderItem.scss'

const HeaderItem = ({ icon, text, path }) => {
    return (
        <Link to={path} className="headerItem">
            <i className={icon}></i>
            <p className="headerItem__text">{text}</p>
        </Link>
    )
}

HeaderItem.protoTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default HeaderItem
