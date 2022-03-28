// CSS
import './HeaderProfile.scss'

const HeaderProfile = () => {
    const userName = 'Tony Jarvis'
    return (
        <div className="headerProfile">
            <h1 className="headerProfile__title">
                Welcome back <br /> {userName}!
            </h1>
            <div className="headeProfiler__wrapper-button">
                <button className="headerProfile__edit-button">
                    Edit Name
                </button>
            </div>
        </div>
    )
}

export default HeaderProfile
