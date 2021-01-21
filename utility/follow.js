import firebase from '../lib/firebase'

const follow = (authId, userId) => {
    const firestore = firebase.firestore()
    firestore.collection(`users/${authId}/followings`).doc(userId).set({
        time: new Date(),
    })
    firestore.collection(`users/${userId}/followers`).doc(authId).set({
        time: new Date(),
    })
}

export default follow
