import UserImage from '../UserImage'
import styles from './styles.module.scss'

export default function MessageSection({
    src = '/user.jpg',
    me = false,
    list = [],
}) {
    return (
        <li className={me ? styles.message + ' ' + styles.me : styles.message}>
            <div className={styles.messageSection}>
                <div className={styles.userImage}>
                    <UserImage src={src} />
                </div>
                <div className={styles.sectionMessages}>
                    {list.map((message, index) => {
                        return (
                            <div key={index} className={styles.message}>
                                {message.message}
                            </div>
                        )
                    })}
                </div>
            </div>
        </li>
    )
}
