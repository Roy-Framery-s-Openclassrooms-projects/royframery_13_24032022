import { Link } from 'react-router-dom'
// Components
import HeaderItem from '../HeaderItem'
// CSS
import './Header.scss'

const Header = () => {
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
                <HeaderItem
                    icon="fa fa-user-circle"
                    text="Sign In"
                    path="/sign-in"
                />
            </nav>
        </header>
    )
}

export default Header
