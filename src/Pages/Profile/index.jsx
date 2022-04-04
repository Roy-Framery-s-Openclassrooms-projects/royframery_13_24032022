// Components
import HeaderProfile from '../../components/HeaderProfile'
import Account from '../../components/Account'
// CSS
import './Profile.scss'

const Profile = () => {
    return (
        <main className="profile">
            <HeaderProfile />
            <h2 className="sr-only">Accounts</h2>
            <Account />
            <Account />
            <Account />
        </main>
    )
}

export default Profile
