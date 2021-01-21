import firebase from '../lib/firebase'

const isFollowing = async (authId, userId) => {
    const firestore = firebase.firestore()
    return await firestore
        .doc(`users/${authId}/followings/${userId}`)
        .get()
        .then((res) => res.exists)
}

export default isFollowing
