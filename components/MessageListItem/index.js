import UserImage from '../UserImage'
import styles from './styles.module.scss'

export default function MessageListItem({ username = "owuzan", content = "Bu bir test mesajıdır.", src = "owuzan.jpg" }) {
    return (
        <a href="/">
            <div className={styles.messageListUserImage}>
                <UserImage size={56} status="default" src={src} />
            </div>
            <div className={styles.messageListUserMeta}>
                <span>{username}</span>
                <p>{content}</p>
            </div>
        </a>
    )
}
