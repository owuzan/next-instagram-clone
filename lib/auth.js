import React, { useState, useEffect, useContext, createContext } from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'

import firebase from './firebase'
import { createUser } from './db'

const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser)
            const { token, ...userWithoutToken } = user

            // createUser(user.uid, userWithoutToken)
            setUser(user)

            cookie.set('instagram-clone-auth', true, {
                expires: 1,
            })

            setLoading(false)
            return user
        } else {
            setUser(false)
            cookie.remove('instagram-clone-auth')
            setLoading(false)
            return false
        }
    }

    const signIn = (email, password) => {
        setLoading(true)
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                handleUser(response.user)
                Router.push('/')
            })
    }

    const signout = () => {
        Router.push('/')

        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false))
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser)
        return () => unsubscribe()
    }, [])

    return {
        user,
        loading,
        signIn,
        signout,
    }
}

// const getStripeRole = async () => {
//   await firebase.auth().currentUser.getIdToken(true);
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

//   return decodedToken.claims.stripeRole || 'free';
// };

const formatUser = async (user) => {
    return {
        uid: user.uid,
        email: user.email,
        // name: user.displayName,
        token: user.xa,
        // photoUrl: user.photoURL,
    }
}
