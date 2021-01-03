import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        // FIXME: env çalışmıyor.
        apiKey: 'AIzaSyD7pqsPi5LLq121Y5e4FbkI5RkPFW03bH4',
        authDomain: 'instagram-clone-45093.firebaseapp.com',
        databaseURL:
            'https://instagram-clone-45093-default-rtdb.firebaseio.com',
        projectId: 'instagram-clone-45093',
        storageBucket: 'instagram-clone-45093.appspot.com',
        messagingSenderId: '820550670430',
        appId: '1:820550670430:web:8aa8ca9925e5ca405bbccf',
    })
}

export default firebase
