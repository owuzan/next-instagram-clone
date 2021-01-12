import firebase from '../lib/firebase'

const isFollowing = async (authId, userId) => {
    const firestore = firebase.firestore()
    const docs = await firestore
        .collection(`users/${authId}/followings`)
        .get()
        .then((res) => res)
    let result = false
    docs.forEach((doc) => {
        if (doc.id == userId) {
            result = true
        }
    })
    return result
}

export default isFollowing
