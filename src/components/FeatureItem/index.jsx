import PropTypes from 'prop-types'
// CSS
import './FeatureItem.scss'

/**
 * @description Component that show a feature item
 * @returns { HTMLElement }
 */
const FeatureItem = ({ image, title, text }) => {
    return (
        <div className="feature">
            <img src={image} alt="" className="feature__img" />
            <h3 className="feature__title">{title}</h3>
            <p className="feature__text">{text}</p>
        </div>
    )
}

FeatureItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default FeatureItem
