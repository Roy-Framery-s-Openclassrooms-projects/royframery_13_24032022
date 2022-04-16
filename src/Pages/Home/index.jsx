import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// thunk
import { getProfile } from '../../features/user'
// Components
import Hero from '../../components/Hero'
import Features from '../../components/Features'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token')
            dispatch(getProfile(token))
        }
    }, [dispatch])
    return (
        <main className="home">
            <Hero />
            <Features />
        </main>
    )
}

export default Home
