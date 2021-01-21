import React from 'react'
import styles from './styles.module.scss'
import UserImage from '../UserImage'
import UserStatistics from '../UserStatistics'
import EditProfileBtn from '../EditProfileBtn'
import UserInfo from '../UserInfo'
import UserPosts from '../UserPosts'
import ProfileFollowButton from '../ProfileFollowButton'
import isFollowing from '../../utility/isFollowing'

import useWindowSize from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'
import firebase from '../../lib/firebase'
import * as Icons from '../../icons'

import { getUserData, getUserIdFromUsername } from '../../lib/db'
import { useAuth } from '../../lib/auth'
export default function Profile() {
    const firestore = firebase.firestore()
    const router = useRouter()
    const ww = useWindowSize().width
    const auth = useAuth()
    const [myProfile, setMyProfile] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [profileId, setProfileId] = React.useState(null)
    const [isUserFollowing, setIsUserFollowing] = React.useState(null)
    const [userData, setUserData] = React.useState({})
    const [postsCount, setPostsCount] = React.useState(null)
    const [followersCount, setFollowersCount] = React.useState(null)
    const [followingsCount, setFollowingsCount] = React.useState(null)
    const [userStatistics, setUserStatistics] = React.useState({
        postsCount,
        followersCount,
        followingsCount,
    })

    const setIsUserFollowingHandle = (bool) => {
        setIsUserFollowing(bool)
        updateUserStatistics(profileId)
    }
    const updatePostsCount = (userId) => {
        firestore
            .collection(`users/${userId}/posts`)
            .get()
            .then((res) => {
                setPostsCount(res.docs.length)
            })
    }
    const updateFollowersCount = (userId) => {
        firestore
            .collection(`users/${userId}/followers`)
            .get()
            .then((res) => {
                setFollowersCount(res.docs.length)
            })
    }
    const updateFollowingsCount = (userId) => {
        firestore
            .collection(`users/${userId}/followings`)
            .get()
            .then((res) => {
                setFollowingsCount(res.docs.length)
            })
    }
    const updateUserStatistics = (userId) => {
        updatePostsCount(userId)
        updateFollowersCount(userId)
        updateFollowingsCount(userId)
    }
    const updateUserData = async (userId) => {
        setUserData({
            id: userId,
            ...(await getUserData(userId)),
        })
    }
    React.useEffect(async () => {
        setLoading(true)
        const userId = await getUserIdFromUsername(router.query.username)
        setProfileId(userId)
        setMyProfile(auth.user.id == userId)
        updateUserStatistics(userId)
        updateUserData(userId)
        setIsUserFollowing(await isFollowing(auth.user.id, userId))
        setLoading(false)
    }, [router.query.username])

    React.useEffect(() => {
        setUserStatistics({ postsCount, followersCount, followingsCount })
    }, [postsCount, followersCount, followingsCount])

    return (
        <div className={styles.profilePage}>
            <header className={styles.profilePageHeader}>
                <div className={styles.profileImageWrapper}>
                    {ww >= 735 ? (
                        <UserImage size={150} />
                    ) : (
                        <UserImage size={77} />
                    )}
                </div>
                <section className={styles.profileMetas}>
                    {ww >= 735 && (
                        <div className={styles.userHead}>
                            <h2 className={styles.usernameTitle}>
                                {userData.username}
                            </h2>
                            {!myProfile && !loading && (
                                <ProfileFollowButton
                                    auth={auth}
                                    profileId={profileId}
                                    isUserFollowing={isUserFollowing}
                                    setIsUserFollowingHandle={
                                        setIsUserFollowingHandle
                                    }
                                />
                            )}
                            {myProfile && (
                                <>
                                    <EditProfileBtn />
                                    <button
                                        className={styles.profileSettingsBtn}
                                    >
                                        <Icons.Options
                                            style={{ fontSize: '24px' }}
                                        />
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                    <UserStatistics statistics={userStatistics} />
                    {!myProfile && ww < 735 && !loading && (
                        <ProfileFollowButton
                            auth={auth}
                            profileId={profileId}
                            isUserFollowing={isUserFollowing}
                            setIsUserFollowingHandle={setIsUserFollowingHandle}
                        />
                    )}
                    {ww >= 735 && <UserInfo userData={userData} />}
                </section>
            </header>
            {ww < 735 && (
                <>
                    <UserInfo userData={userData} />
                    {myProfile ? <EditProfileBtn /> : ''}
                </>
            )}
            <div className={styles.userContents}>
                <div className={styles.userContentTabs}>
                    <button
                        className={
                            !(
                                router.query?.index == 'saved' ||
                                router.query?.index == 'tagged'
                            )
                                ? styles.activeTab
                                : undefined
                        }
                        onClick={() =>
                            router.push(`/${userData.username}`, undefined, {
                                shallow: true,
                            })
                        }
                    >
                        <span className={styles.icon}>
                            <Icons.Posts />
                        </span>
                        <span className={styles.tab}>Gönderiler</span>
                    </button>
                    {myProfile ? (
                        <button
                            className={
                                router.query?.index == 'saved'
                                    ? styles.activeTab
                                    : undefined
                            }
                            onClick={() =>
                                router.push(
                                    {
                                        pathname: `/${userData.username}/saved`,
                                    },
                                    undefined,
                                    {
                                        shallow: true,
                                    }
                                )
                            }
                        >
                            <span className={styles.icon}>
                                <Icons.Bookmark />
                            </span>
                            <span className={styles.tab}>Kaydedilenler</span>
                        </button>
                    ) : (
                        ''
                    )}
                    <button
                        className={
                            router.query?.index == 'tagged'
                                ? styles.activeTab
                                : undefined
                        }
                        onClick={() =>
                            router.push(
                                {
                                    pathname: `/${userData.username}/tagged`,
                                },
                                undefined,
                                {
                                    shallow: true,
                                }
                            )
                        }
                    >
                        <span className={styles.icon}>
                            <Icons.Tagged />
                        </span>
                        <span className={styles.tab}>Etiketlenenler</span>
                    </button>
                </div>
                {router.query?.index == 'saved' ? 'Kayıtlı gönderiler' : ''}
                {router.query?.index == 'tagged'
                    ? 'Etiketlenen gönderiler'
                    : ''}
                {router.query?.index == 'saved' ||
                router.query?.index == 'tagged' ? (
                    ''
                ) : (
                    <UserPosts />
                )}
            </div>
        </div>
    )
}
