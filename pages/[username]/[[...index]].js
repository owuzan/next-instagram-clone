import React from 'react'
import Profile from '../../components/Profile'
import NotFoundScreen from '../../components/NotFoundScreen'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'
import { usernameExist } from '../../lib/db'

const ProfilePage = () => {
    const router = useRouter()
    const { user, loading } = useAuth()
    const [isUserExist, setIsUserExist] = React.useState(false)

    const [userExistLoad, setUserExistLoad] = React.useState(true)

    React.useEffect(async () => {
        if (typeof router.query.username != 'undefined') {
            const query = await usernameExist(router.query.username)
            query ? setIsUserExist(true) : setIsUserExist(false)
            setUserExistLoad(false)
        }
    }, [router.query.username])

    if (loading || userExistLoad) {
        return <Loader />
    } else {
        if (!isUserExist || !user) {
            return <NotFoundScreen></NotFoundScreen>
        } else {
            return <Profile />
        }
    }
}
export default ProfilePage
