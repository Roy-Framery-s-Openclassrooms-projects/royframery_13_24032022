// CSS
import './Footer.scss'

const actuelDate = new Date().getFullYear()

/**
 * @description Component that show the footer
 * @returns { HTMLElement }
 */
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Copyright {actuelDate} Argent Bank</p>
        </footer>
    )
}

export default Footer
