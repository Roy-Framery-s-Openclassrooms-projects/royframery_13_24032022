// Components
import HeaderProfile from '../../components/HeaderProfile'
import Account from '../../components/Account'
// CSS
import './Profile.scss'

const Profile = () => {
    document.title = 'Argent Bank - Profile'
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
