import React from 'react'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'
// import { useAuth } from '../../lib/auth'

export default function direct() {
    const router = useRouter()
    // const { user, loading } = useAuth()
    React.useEffect(() => {
        router.push('/direct/inbox')
    }, [])
    return <></>
}
