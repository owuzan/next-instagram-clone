import firebase from '../lib/firebase'

const follow = async (authId, userId) => {
    const firestore = firebase.firestore()
    await firestore
        .collection(`users/${authId}/followings`)
        .doc(userId)
        .set({
            followingTime: new Date(),
        })
        .catch((error) => {
            return false
        })
    await firestore
        .collection(`users/${userId}/followers`)
        .doc(authId)
        .set({
            followerTime: new Date(),
        })
        .catch((error) => {
            return false
        })
    return true
}

export default follow
