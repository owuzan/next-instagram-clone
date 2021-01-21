import firebase from '../lib/firebase'

const unfollow = (authId, userId) => {
    const firestore = firebase.firestore()
    firestore.collection(`users/${authId}/followings`).doc(userId).delete()
    firestore.collection(`users/${userId}/followers`).doc(authId).delete()
}

export default unfollow
