import firebase from './firebase'
import { useAuth } from './auth'
const firestore = firebase.firestore()
const app = firebase.app()

/* -------------------------------------------------------------------------- */
/*                              Control Functions                             */
/* -------------------------------------------------------------------------- */

export const usernameExist = async (username) => {
    const query = firestore
        .collection('users')
        .where('username', '==', username)

    return await query.get().then((users) => {
        return users.docs.length ? true : false
    })
}

/* -------------------------------------------------------------------------- */
/*                              Insert Functions                              */
/* -------------------------------------------------------------------------- */

export const signUp = async (email, password, username, name) => {
    const isExistUsername = await usernameExist(username.trim())
    if (!isExistUsername) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                const user = res.user
                const id = user.uid
                return firestore.collection('users').doc(id).set({
                    username,
                    email,
                    name,
                    createdAt: new Date(),
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    // return firestore
    //     .collection('users')
    //     .doc(uid)
    //     .set({ uid, ...data }, { merge: true })
}

/* -------------------------------------------------------------------------- */
/*                              Select Functions                              */
/* -------------------------------------------------------------------------- */

export const getCurrentUserData = async (id) => {
    if (!id) {
        return false
    }
    const userData = await firestore
        .collection('users')
        .doc(id)
        .get()
        .then((user) => {
            console.log(user.data())
            return user.data()
        })
        .catch((error) => {
            console.log(error.message)
        })
    return userData
}

// export function createSite(data) {
//     const site = firestore.collection('sites').doc()
//     site.set(data)

//     return site
// }

// export async function deleteSite(id) {
//     firestore.collection('sites').doc(id).delete()
//     const snapshot = await firestore
//         .collection('feedback')
//         .where('siteId', '==', id)
//         .get()

//     const batch = firestore.batch()

//     snapshot.forEach((doc) => {
//         batch.delete(doc.ref)
//     })

//     return batch.commit()
// }

// export async function updateSite(id, newValues) {
//     return firestore.collection('sites').doc(id).update(newValues)
// }

// export function createFeedback(data) {
//     return firestore.collection('feedback').add(data)
// }

// export function deleteFeedback(id) {
//     return firestore.collection('feedback').doc(id).delete()
// }

// export function updateFeedback(id, newValues) {
//     return firestore.collection('feedback').doc(id).update(newValues)
// }

// export async function createCheckoutSession(uid) {
//     const checkoutSessionRef = await firestore
//         .collection('users')
//         .doc(uid)
//         .collection('checkout_sessions')
//         .add({
//             price: process.env.NEXT_PUBLIC_PRICE_ID,
//             allow_promotion_codes: true,
//             success_url: window.location.origin,
//             cancel_url: window.location.origin,
//         })

//     checkoutSessionRef.onSnapshot(async (snap) => {
//         const { sessionId } = snap.data()

//         if (sessionId) {
//             const stripe = await getStripe()

//             stripe.redirectToCheckout({ sessionId })
//         }
//     })
// }
