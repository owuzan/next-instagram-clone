import React from 'react'
import styles from './styles.module.scss'
import linkedText from '../../utility/linkedText'

import { getCurrentUserData } from '../../lib/db'
import { useAuth } from '../../lib/auth'
export default function UserInfo() {
    const { user, signout } = useAuth()
    const [userData, setUserData] = React.useState('')
    React.useEffect(async () => {
        setUserData(await getCurrentUserData(await user?.id))
    }, [user])
    return (
        <div className={styles.userProfileInfo}>
            <h1 className={styles.userFullname}>{userData.name}</h1>
            <div className={styles.userBiography}>
                {linkedText(
                    `Buraya @${userData.username} (${userData.name}) kullanıcısının biyografisi gelecek.`
                )}
            </div>
        </div>
    )
}
