import React from 'react'
import styles from './styles.module.scss'

import UserUmage from '../UserImage'
import Info from '../../icons/Info'
import { getUserData } from '../../lib/db'
import Link from 'next/link'

export default function MessageHeader({ userId }) {
    const [userData, setUserData] = React.useState('')

    React.useEffect(async () => {
        setUserData(await getUserData(userId))
    }, [userId])

    return (
        <div className={styles.messageContentHeader}>
            <div className={styles.contactInfo}>
                <Link href={`/${userData.username}`}>
                    <a>
                        <UserUmage src="/user.jpg" />
                        <span className={styles.contactUsername}>
                            {userData.username}
                        </span>
                    </a>
                </Link>
            </div>
            <button
                className={styles.userInfoButton}
                style={{ fontSize: '24px' }}
            >
                <Info />
            </button>
        </div>
    )
}
