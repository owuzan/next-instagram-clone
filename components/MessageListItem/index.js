import { useState, useEffect } from 'react'
import UserImage from '../UserImage'
import styles from './styles.module.scss'
import Link from 'next/link'
import { getUserData } from '../../lib/db'

export default function MessageListItem({ contact }) {
    const [user, setUser] = useState('')

    useEffect(async () => {
        const userData = await getUserData(contact.id)
        setUser(userData)
    }, [])

    return (
        <Link href="">
            <a>
                <div className={styles.messageListUserImage}>
                    <UserImage size={56} status="default" src={contact.src} />
                </div>
                <div className={styles.messageListUserMeta}>
                    <span>{user.username}</span>
                    <p>{contact.message}</p>
                </div>
            </a>
        </Link>
    )
}
