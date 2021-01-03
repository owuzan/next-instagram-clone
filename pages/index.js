import HomeLayout from '../components/HomeLayout'
import SignInScreen from '../components/SignInScreen'
import { useAuth } from '../lib/auth'
export default function Home() {
    const { user, signout, loading } = useAuth()
    console.log('User:', user)
    console.log(loading)
    if (loading) {
        return <></>
    }
    return <>{user ? <HomeLayout /> : <SignInScreen />}</>
}
