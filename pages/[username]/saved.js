import Profile from '../../components/Profile'
import Loader from '../../components/Loader'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'

export default function Saved() {
    const router = useRouter()
    const { user, loading } = useAuth()

    if (loading) {
        return <Loader />
    } else {
        if (!user) {
            router.push('/')
            return <></>
        } else {
            return <Profile />
        }
    }
}
