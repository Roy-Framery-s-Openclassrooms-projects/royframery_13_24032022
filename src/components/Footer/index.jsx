// CSS
import './Footer.scss'

const actuelDate = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Copyright {actuelDate} Argent Bank</p>
        </footer>
    )
}

export default Footer
