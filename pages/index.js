import { useEffect, useState } from 'react'
import HomeLayout from '../components/HomeLayout'
import SignInScreen from '../components/SignInScreen'
import { useAuth } from '../lib/auth'
import Loader from '../components/Loader'

const Home = () => {
    const { user, loading } = useAuth()

    if (loading) {
        return <Loader />
    }
    return <>{user ? <HomeLayout /> : <SignInScreen />}</>
}
export default Home
