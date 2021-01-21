import React from 'react'
import styles from './styles.module.scss'
import follow from '../../utility/follow'
import unfollow from '../../utility/unfollow'
import { useRouter } from 'next/router'

const ProfileFollowButton = (props) => {
    const router = useRouter()
    const { auth, profileId, isUserFollowing, setIsUserFollowingHandle } = props
    if (isUserFollowing) {
        return (
            <>
                <button
                    className={styles.alreadyFollowing}
                    onClick={() => {
                        router.push(
                            `/direct/t/${profileId}?contact=${profileId}`,
                            `/direct/t/${profileId}`
                        )
                    }}
                >
                    Mesaj Gönder
                </button>
                <button
                    className={styles.unfollow}
                    onClick={() => {
                        unfollow(auth.user.id, profileId)
                        setIsUserFollowingHandle(false)
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
                    follow(auth.user.id, profileId)
                    setIsUserFollowingHandle(true)
                }}
            >
                Takip Et
            </button>
        )
    }
}

export default ProfileFollowButton
