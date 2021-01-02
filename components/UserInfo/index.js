import styles from './styles.module.scss'
import linkedText from '../../utility/linkedText'

export default function UserInfo() {
    return (
        <div className={styles.userProfileInfo}>
            <h1 className={styles.userFullname}>Oğuzhan Yılmaz</h1>
            <div className={styles.userBiography}>
                {linkedText(`Fırat Üniversitesi - Bilgisayar Mühendsiliği @coolthemes `)}
            </div>
        </div>
    )
}
