// Components
import FeatureItem from '../FeatureItem'
// DATA
import dataFeatures from '../../utils/dataFeatures'
// CSS
import './Features.scss'

/**
 * @description Component that show all the features
 * @returns { HTMLElement }
 */
const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {dataFeatures.map((dataFeature, index) => {
                return (
                    <FeatureItem
                        key={index}
                        image={dataFeature.image}
                        title={dataFeature.title}
                        text={dataFeature.text}
                    />
                )
            })}
        </section>
    )
}

export default Features
