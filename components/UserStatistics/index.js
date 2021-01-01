import styles from './styles.module.scss'

export default function UserStatistics() {
    return (
        <ul className={styles.userStatistics}>
            <li>
                <span className={styles.count}>11</span>
                <span>gönderi</span>
            </li>
            <li>
                <span className={styles.count}>341</span>
                <span>takipçi</span>
            </li>
            <li>
                <span className={styles.count}>429</span>
                <span>takip</span>
            </li>
        </ul>
    )
}
