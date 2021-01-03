import firebase from './firebase'

const firestore = firebase.firestore()
const app = firebase.app()

export const signUp = async (email, password, username, name) => {
    const isExistUsername = await usernameExist(username)
    console.log(`"${username}" kullanıcısı mevcut mu:`, isExistUsername)
    if (!isExistUsername) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                const user = res.user
                const id = user.uid
                firestore.collection('users').doc(id).set({
                    username,
                    email,
                    name,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
            })
            .catch((error) => {
                var errorCode = error.code
                var errorMessage = error.message
                console.log(errorMessage)
            })
    }

    // return firestore
    //     .collection('users')
    //     .doc(uid)
    //     .set({ uid, ...data }, { merge: true })
}

export const usernameExist = async (username) => {
    const query = firestore
        .collection('users')
        .where('username', '==', username)

    return await query.get().then((users) => {
        return users.docs.length ? true : false
    })
}

export function createSite(data) {
    const site = firestore.collection('sites').doc()
    site.set(data)

    return site
}

export async function deleteSite(id) {
    firestore.collection('sites').doc(id).delete()
    const snapshot = await firestore
        .collection('feedback')
        .where('siteId', '==', id)
        .get()

    const batch = firestore.batch()

    snapshot.forEach((doc) => {
        batch.delete(doc.ref)
    })

    return batch.commit()
}

export async function updateSite(id, newValues) {
    return firestore.collection('sites').doc(id).update(newValues)
}

export function createFeedback(data) {
    return firestore.collection('feedback').add(data)
}

export function deleteFeedback(id) {
    return firestore.collection('feedback').doc(id).delete()
}

export function updateFeedback(id, newValues) {
    return firestore.collection('feedback').doc(id).update(newValues)
}

export async function createCheckoutSession(uid) {
    const checkoutSessionRef = await firestore
        .collection('users')
        .doc(uid)
        .collection('checkout_sessions')
        .add({
            price: process.env.NEXT_PUBLIC_PRICE_ID,
            allow_promotion_codes: true,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        })

    checkoutSessionRef.onSnapshot(async (snap) => {
        const { sessionId } = snap.data()

        if (sessionId) {
            const stripe = await getStripe()

            stripe.redirectToCheckout({ sessionId })
        }
    })
}
