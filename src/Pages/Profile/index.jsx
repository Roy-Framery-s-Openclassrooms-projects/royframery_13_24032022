import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import HeaderProfile from '../../components/HeaderProfile'
import Account from '../../components/Account'
// CSS
import './Profile.scss'
// Selectors
import { selectToken } from '../../utils/selectors'
// thunk
import { getProfile } from '../../features/user'

const Profile = () => {
    document.title = 'Argent Bank - Profile'
    const dispatch = useDispatch()
    const token = useSelector(selectToken) || localStorage.getItem('token')

    useEffect(() => {
        dispatch(getProfile(token))
    })

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
