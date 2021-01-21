import React from 'react'
import styles from './styles.module.scss'

export default function UserStatistics(props) {
    const { postsCount, followersCount, followingsCount } = props.statistics
    return (
        <ul className={styles.userStatistics}>
            <li>
                <span className={styles.count}>{postsCount}</span>
                <span>gönderi</span>
            </li>
            <li>
                <span className={styles.count}>{followersCount}</span>
                <span>takipçi</span>
            </li>
            <li>
                <span className={styles.count}>{followingsCount}</span>
                <span>takip</span>
            </li>
        </ul>
    )
}
