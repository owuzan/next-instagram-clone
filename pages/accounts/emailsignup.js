import SignUpScreen from '../../components/SignUpScreen'
import { useAuth } from '../../lib/auth'
import Router from 'next/router'

export default function SignUp() {
    const { user } = useAuth()
    if (user) {
        Router.push('/')
    }
    return <SignUpScreen />
}
