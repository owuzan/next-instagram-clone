import React from 'react'
import styles from './styles.module.scss'
import linkedText from '../../utility/linkedText'
import { useRouter } from 'next/router'
import { getUserData, getUserIdFromUsername } from '../../lib/db'
import { useAuth } from '../../lib/auth'
import Link from 'next/link'
export default function UserInfo() {
    const router = useRouter()
    const { user } = useAuth()
    const [userData, setUserData] = React.useState('')
    React.useEffect(async () => {
        setUserData(
            await getUserData(
                await getUserIdFromUsername(router.query.username)
            )
        )
    }, [router.query.username])
    return (
        <div className={styles.userProfileInfo}>
            <h1 className={styles.userFullname}>{userData.name}</h1>
            <div className={styles.userBiography}>
                <p>
                    {linkedText(
                        `Buraya @${userData.username} (${userData.name}) kullanıcısının biyografisi gelecek.`
                    )}
                </p>
                <br />
                <p>Burası test amaçlı yazılmıştır.</p>
                <p>{linkedText('Var olan @owuzan hesabına git.')}</p>
                <p>{linkedText('Var olan @ssezer hesabına git.')}</p>
                <p>
                    {linkedText('Var olmayan @boylebirhesapyok hesabına git.')}
                </p>
                <p>
                    {linkedText(
                        'Route olan @direct linkine hesap olarak gitmeye çalış.'
                    )}
                </p>
            </div>
        </div>
    )
}
