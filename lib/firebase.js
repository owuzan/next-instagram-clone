import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        // FIXME: apiKey için env çalışmıyor.
        apiKey: 'AIzaSyD7pqsPi5LLq121Y5e4FbkI5RkPFW03bH4',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
    })
}

export default firebase
