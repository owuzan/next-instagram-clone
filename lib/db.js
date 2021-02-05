import React from 'react'
import firebase from './firebase'
import { useAuth } from './auth'
const app = firebase.app()
const firestore = firebase.firestore()
const storageRef = firebase.storage().ref()

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

export const searchUser = async (searchText) => {
    const query = firestore.collection('users')

    return await query.get().then((users) => {
        let result = []
        users.docs.forEach((user) => {
            const data = user.data()
            if (
                searchText.length > 0 &&
                (data.username
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                    data.name.toLowerCase().includes(searchText.toLowerCase()))
            ) {
                result.push(data)
            }
        })
        return result
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
                return error
            })
    } else {
        return {
            message:
                'Bu kullanıcı adı alınamıyor. Lütfen başka bir kullanıcı adı dene.',
        }
    }

    // return firestore
    //     .collection('users')
    //     .doc(uid)
    //     .set({ uid, ...data }, { merge: true })
}

/* -------------------------------------------------------------------------- */
/*                              Select Functions                              */
/* -------------------------------------------------------------------------- */

export const getUserData = async (id) => {
    if (!id) {
        return false
    }
    const userData = await firestore
        .collection('users')
        .doc(id)
        .get()
        .then((user) => {
            return {
                id,
                ...user.data(),
            }
        })
        .catch((error) => {
            console.log(error.message)
        })
    return userData
}

export const getUserIdFromUsername = (username) => {
    return new Promise(async (resolve, reject) => {
        if (!username) {
            reject(false)
        }
        const userData = await firestore
            .collection('users')
            .where('username', '==', username)
            .get()
        if (userData.docs.length) {
            resolve(userData.docs[0].id)
        }
        reject(false)
    })
}

/* -------------------------------------------------------------------------- */
/*                              Storage Functions                             */
/* -------------------------------------------------------------------------- */

export const uploadPost = (id, post) => {
    storageRef
        .child(`posts/${id}/${Date.now()}/${post.file.name}`)
        .put(post.file)
        .then(async (snapshot) => {
            const downloadURL = await snapshot.ref.getDownloadURL()
            const filePath = snapshot.ref.fullPath
            firestore.collection(`users/${id}/posts`).doc().set({
                caption: post.caption,
                image: downloadURL,
                imageRef: filePath,
                time: post.time,
            })
            return true
        })
}

export const getUserPosts = async (id) => {
    const query = firestore
        .collection(`users/${id}/posts`)
        .orderBy('time', 'desc')
        .get()
    const posts = await query

    if (!posts.docs.length) {
        return []
    }

    let userPosts = []
    for (const post of posts.docs) {
        const postData = post.data()
        userPosts.push({
            ...postData,
            id: post.id,
        })
    }
    return userPosts
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
