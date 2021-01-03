import HomeLayout from '../components/HomeLayout'
import SignInScreen from '../components/SignInScreen'
import { useAuth } from '../lib/auth'
export default function Home() {
    const { user, signout, loading } = useAuth()

    return <>{user ? <HomeLayout /> : <SignInScreen />}</>
}
