import React from 'react'
import styles from './styles.module.scss'

import UserUmage from '../UserImage'

import Info from '../../icons/Info'

export default function MessageHeader() {
    return (
        <div className={styles.messageContentHeader}>
            <div className={styles.contactInfo}>
                <UserUmage src="/suleyman.jpg" />
                <span className={styles.contactUsername}>
                    suleyman
                </span>
            </div>
            <button className={styles.userInfoButton} style={{fontSize: "24px"}}>
                <Info />
            </button>
        </div>
    )
}
