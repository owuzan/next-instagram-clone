import firebase from '../lib/firebase'

const sendMessage = (authId, userId, message) => {
    const firestore = firebase.firestore()

    const time = new Date()
    // From
    firestore
        .collection(`users/${authId}/contacts/${userId}/messages`)
        .doc()
        .set({
            me: true,
            message,
            seen: false,
            time,
            liked: false,
        })
        .catch((error) => {
            console.log(error.message)
            return false
        })
    firestore
        .collection(`users/${authId}/contacts`)
        .doc(userId)
        .set({
            me: true,
            message,
            seen: false,
            time,
            liked: false,
        })
        .catch((error) => {
            console.log(error.message)
            return false
        })

    // To
    firestore
        .collection(`users/${userId}/contacts/${authId}/messages`)
        .doc()
        .set({
            me: false,
            message,
            seen: false,
            time,
            liked: false,
        })
        .catch((error) => {
            console.log(error.message)
            return false
        })
    firestore
        .collection(`users/${userId}/contacts`)
        .doc(authId)
        .set({
            me: false,
            message,
            seen: false,
            time,
            liked: false,
        })
        .catch((error) => {
            console.log(error.message)
            return false
        })

    return true
}

export default sendMessage
