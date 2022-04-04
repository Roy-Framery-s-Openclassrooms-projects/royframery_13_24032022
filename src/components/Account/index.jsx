// css
import './Account.scss'

const Account = () => {
    return (
        <section className="account">
            <div className="account__content-wrapper">
                <h3 className="account__title">Argent Bank Checking (x8349)</h3>
                <p className="account__amount">$2,082.79</p>
                <p className="account__amount-description">Available Balance</p>
            </div>
            <div className="account__content-wrapper cta">
                <button className="account__button">View transactions</button>
            </div>
        </section>
    )
}

export default Account
