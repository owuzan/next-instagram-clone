import React from 'react'
import styles from './styles.module.scss'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'
import { getUserIdFromUsername } from '../../lib/db'
import isFollowing from '../../utility/isFollowing'
import follow from '../../utility/follow'
import unfollow from '../../utility/unfollow'
import firebase from '../../lib/firebase'

const ProfileFollowButton = () => {
    const firestore = firebase.firestore()
    const auth = useAuth()
    const router = useRouter()
    const username = router.query.username
    const [userIsFollowing, setUserIsFollowing] = React.useState(null)
    const [userId, setUserId] = React.useState(null)
    const [click, setClick] = React.useState(0)
    React.useEffect(async () => {
        const profileId = await getUserIdFromUsername(username)
        setUserId(profileId)
        const query = await firestore
            .collection(`users/${auth.user.id}/followings`)
            .doc(profileId)
            .get()
        setUserIsFollowing(query.exists)
    }, [click, router.query.username])

    if (userIsFollowing == null) {
        return false
    }
    if (userIsFollowing) {
        return (
            <>
                <button className={styles.alreadyFollowing}>
                    Mesaj Gönder
                </button>
                <button
                    className={styles.unfollow}
                    onClick={() => {
                        unfollow(auth.user.id, userId)
                        let c = click
                        c++
                        setClick(c)
                    }}
                >
                    Takipten Çık
                </button>
            </>
        )
    } else {
        return (
            <button
                className={styles.followButton}
                onClick={() => {
                    follow(auth.user.id, userId)
                    let c = click
                    c++
                    setClick(c)
                }}
            >
                Takip Et
            </button>
        )
    }
}

export default ProfileFollowButton
