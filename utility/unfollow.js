import firebase from '../lib/firebase'

const unfollow = async (authId, userId) => {
    const firestore = firebase.firestore()
    await firestore
        .collection(`users/${authId}/followings`)
        .doc(userId)
        .delete()
        .catch((error) => {
            return false
        })
    await firestore
        .collection(`users/${userId}/followers`)
        .doc(authId)
        .delete()
        .catch((error) => {
            return false
        })
    return true
}

export default unfollow
