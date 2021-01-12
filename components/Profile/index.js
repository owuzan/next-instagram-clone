import React from 'react'
import styles from './styles.module.scss'
import UserImage from '../UserImage'
import UserStatistics from '../UserStatistics'
import EditProfileBtn from '../EditProfileBtn'
import UserInfo from '../UserInfo'
import UserPosts from '../UserPosts'
import ProfileFollowButton from '../ProfileFollowButton'

import useWindowSize from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'

import * as Icons from '../../icons'

import { getUserData, getUserIdFromUsername } from '../../lib/db'
import { useAuth } from '../../lib/auth'
export default function Profile() {
    const router = useRouter()
    const ww = useWindowSize().width
    const { user } = useAuth()
    const [myProfile, setMyProfile] = React.useState(false)
    const [userData, setUserData] = React.useState('')

    React.useEffect(async () => {
        const userId = await getUserIdFromUsername(router.query.username)
        if (userId) {
            setUserData({
                id: userId,
                ...(await getUserData(userId)),
            })
        } else {
            setUserData(false)
        }
    }, [user, router.query.username])

    React.useEffect(() => {
        user.id === userData.id ? setMyProfile(true) : setMyProfile(false)
    }, [userData])

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
                    {ww >= 735 ? (
                        <div className={styles.userHead}>
                            <h2 className={styles.usernameTitle}>
                                {userData.username}
                            </h2>
                            {!myProfile && <ProfileFollowButton />}
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
                    ) : (
                        ''
                    )}
                    <UserStatistics />
                    {!myProfile && ww < 735 && <ProfileFollowButton />}
                    {ww >= 735 ? <UserInfo /> : ''}
                </section>
            </header>
            {ww < 735 ? (
                <>
                    <UserInfo />
                    {myProfile ? <EditProfileBtn /> : ''}
                </>
            ) : (
                ''
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
