import React from 'react'
import Profile from '../../components/Profile'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'

export default function index() {
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
