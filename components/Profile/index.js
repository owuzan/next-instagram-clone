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

export default function Profile({ username = "owuzan" }) {
    const router = useRouter()
    const route = router?.route
    const ww = useWindowSize().width

    return (
        <div className={styles.profilePage}>
            <header className={styles.profilePageHeader}>
                <div className={styles.profileImageWrapper}>
                    {
                        ww >= 735 ?
                            <UserImage type="story" size={150} /> :
                            <UserImage type="story" size={77} />
                    }
                </div>
                <section className={styles.profileMetas}>
                    {
                        ww >= 735 ?
                            <div className={styles.userHead}>
                                <h2 className={styles.usernameTitle}>owuzan</h2>
                                <EditProfileBtn />
                                <button className={styles.profileSettingsBtn}>
                                    <Icons.Options style={{ fontSize: "24px" }} />
                                </button>
                            </div> : ""
                    }
                    <UserStatistics />
                    {
                        ww >= 735 ?
                            < UserInfo /> : ""

                    }
                </section>
            </header>
            {
                ww < 735 ?
                    <>
                        <UserInfo />
                        <EditProfileBtn />
                    </>
                    : ""
            }
            <div className={styles.userContents}>
                <div className={styles.userContentTabs}>
                    <button
                        className={route === "/[username]" ? styles.activeTab : undefined}
                        onClick={() => router.push(`/${username}`, undefined, { shallow: true })}
                    >
                        <span className={styles.icon}>
                            <Icons.Posts />
                        </span>
                        <span className={styles.tab}>Gönderiler</span>
                    </button>
                    <button
                        className={route === "/[username]/saved" ? styles.activeTab : undefined}
                        onClick={() => router.push(`/${username}/saved`, undefined, { shallow: true })}
                    >
                        <span className={styles.icon}>
                            <Icons.Bookmark />
                        </span>
                        <span className={styles.tab}>Kaydedilenler</span>
                    </button>
                </div>
                {
                    route === '/[username]' ?
                        <UserPosts /> : ""
                }
                {
                    route === '/[username]/saved' ?
                        "Kayıtlı gönderiler gösterilecek burada" : ""
                }
            </div>
        </div >
    )
}
