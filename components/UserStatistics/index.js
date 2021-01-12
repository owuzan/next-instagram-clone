import React from 'react'
import styles from './styles.module.scss'
import { getUserIdFromUsername } from '../../lib/db'
import { useRouter } from 'next/router'
import firebase from '../../lib/firebase'

export default function UserStatistics() {
    const router = useRouter()
    const firestore = firebase.firestore()
    const [postsCount, setPostsCount] = React.useState(null)
    const [followersCount, setFollowersCount] = React.useState(null)
    const [followingsCount, setFollowingsCount] = React.useState(null)

    let unsubscribePosts
    let unsubscribeFollowers
    let unsubscribeFollowings

    React.useEffect(async () => {
        const id = await getUserIdFromUsername(router.query.username)

        unsubscribePosts = firestore
            .collection(`users/${id}/posts`)
            .onSnapshot((snapshot) => setPostsCount(snapshot.docs.length))

        unsubscribeFollowers = firestore
            .collection(`users/${id}/followers`)
            .onSnapshot((snapshot) => {
                setFollowersCount(snapshot.docs.length)
            })

        unsubscribeFollowings = firestore
            .collection(`users/${id}/followings`)
            .onSnapshot((snapshot) => setFollowingsCount(snapshot.docs.length))
    }, [router.query.username])
    React.useEffect(() => {
        return () => {
            unsubscribePosts()
            unsubscribeFollowers()
            unsubscribeFollowings()
        }
    }, [])

    return (
        <ul className={styles.userStatistics}>
            <li>
                <span className={styles.count}>{postsCount}</span>
                <span>gönderi</span>
            </li>
            <li>
                <span className={styles.count}>{followersCount}</span>
                <span>takipçi</span>
            </li>
            <li>
                <span className={styles.count}>{followingsCount}</span>
                <span>takip</span>
            </li>
        </ul>
    )
}
