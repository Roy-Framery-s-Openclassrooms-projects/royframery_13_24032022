import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// Components
import HeaderItem from '../HeaderItem'
// CSS
import './Header.scss'
// selectors
import { selectConnected, selectUserFirstName } from '../../utils/selectors'

const Header = () => {
    const isRemembered = localStorage.getItem('token')
    const isConnected = useSelector(selectConnected)
    const firstname = useSelector(selectUserFirstName)

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__link">
                    <img
                        src="/argentBankLogo.png"
                        alt="Argent Bank Logo"
                        className="header__logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isRemembered || isConnected ? (
                    <div className="header__items">
                        <HeaderItem
                            icon="fa fa-user-circle"
                            text={firstname}
                            path="/profile"
                        />
                        <HeaderItem
                            icon="fa fa-sign-out"
                            text="Sign Out"
                            path="/"
                        />
                    </div>
                ) : (
                    <HeaderItem
                        icon="fa fa-user-circle"
                        text="Sign In"
                        path="/login"
                    />
                )}
            </nav>
        </header>
    )
}

export default Header
