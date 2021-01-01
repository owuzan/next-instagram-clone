import styles from './styles.module.scss'

export default function UserInfo() {
    return (
        <div className={styles.userProfileInfo}>
            <h1 className={styles.userFullname}>Oğuzhan Yılmaz</h1>
            <div className={styles.userBiography}>
                🏢 FU - Computer Engineering <br />
            📌 @wp_coolthemes <br />
            💻 #WordPress & #FrontEnd #Developer <br />
            🏠 Kocaeli <br />
            Twitter: owuzan_ <br />
            </div>
        </div>
    )
}
