import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        // FIXME: apiKey için env çalışmıyor.
        apiKey: 'AIzaSyD7pqsPi5LLq121Y5e4FbkI5RkPFW03bH4',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL:
            'https://instagram-clone-45093-default-rtdb.firebaseio.com',
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: 'instagram-clone-45093.appspot.com',
        messagingSenderId: '820550670430',
        appId: '1:820550670430:web:8aa8ca9925e5ca405bbccf',
    })
}

export default firebase
