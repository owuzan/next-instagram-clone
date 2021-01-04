import React from 'react'
import styles from './styles.module.scss'
import UserImage from '../../components/UserImage'
import UserStatistics from '../../components/UserStatistics'
import EditProfileBtn from '../../components/EditProfileBtn'
import UserInfo from '../../components/UserInfo'
import UserPosts from '../UserPosts'

import useWindowSize from '../../hooks/useWindowSize'
import { useRouter } from 'next/router'

import * as Icons from '../../icons'

import { getCurrentUserData } from '../../lib/db'
import { useAuth } from '../../lib/auth'
export default function Profile() {
    const router = useRouter()
    const route = router?.route
    const { user } = useAuth()
    const [myProfile, setMyProfile] = React.useState(false)
    const [userData, setUserData] = React.useState('')
    React.useEffect(async () => {
        setUserData(await getCurrentUserData(await user?.id))
    }, [user])
    React.useEffect(() => {
        router.query.username === userData.username
            ? setMyProfile(true)
            : setMyProfile(false)
    }, [userData, router.query.username])
    const ww = useWindowSize().width

    console.log(router)
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
                            {myProfile ? <EditProfileBtn /> : ''}
                            <button className={styles.profileSettingsBtn}>
                                <Icons.Options style={{ fontSize: '24px' }} />
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                    <UserStatistics />
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
                            route === '/[username]'
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
                    <button
                        className={
                            route === '/[username]/saved'
                                ? styles.activeTab
                                : undefined
                        }
                        onClick={() =>
                            router.push(
                                `/${userData.username}/saved`,
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
                </div>
                {route === '/[username]' ? <UserPosts /> : ''}
                {route === '/[username]/saved'
                    ? 'Kayıtlı gönderiler gösterilecek burada'
                    : ''}
            </div>
        </div>
    )
}
