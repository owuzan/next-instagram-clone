import HomeLayout from '../components/HomeLayout'
import SignInScreen from '../components/SignInScreen'
import { useAuth } from '../lib/auth'
import Loader from '../components/Loader'

const Home = () => {
    const { user, loading } = useAuth()

    return (
        <>
            {user ? <HomeLayout /> : <SignInScreen />}
            {loading ? <Loader /> : ''}
        </>
    )
}
export default Home
