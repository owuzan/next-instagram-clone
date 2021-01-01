import React from 'react'
import { useRouter } from 'next/router'

export default function direct() {
    const router = useRouter()
    React.useEffect(() => {
        router.push("/direct/inbox")
    }, [])
    return false
}
