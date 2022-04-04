import { Link } from 'react-router-dom'
// Components
import HeaderItem from '../HeaderItem'
// CSS
import './Header.scss'

const Header = () => {
    const pathname = window.location.pathname
    const isProfile = pathname === '/profile'

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
                {isProfile ? (
                    <div className="header__items">
                        <HeaderItem
                            icon="fa fa-user-circle"
                            text="Tony"
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
