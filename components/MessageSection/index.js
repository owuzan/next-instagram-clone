import UserImage from '../UserImage'
import styles from './styles.module.scss'

export default function MessageSection(
    {
        src = "/owuzan.jpg",
        me = false,
        list = [
            {
                message: "Dur lan 2 dk karışma denemek için yazıyorum"
            },
            {
                message: "Ne oluyor lan 😂"
            }
        ]
    }
) {
    return (
        <li className={me ? styles.message + " " + styles.me : styles.message}>
            <div className={styles.messageSection}>
                <div className={styles.userImage}>
                    <UserImage src={src} />
                </div>
                <div className={styles.sectionMessages}>
                    {
                        list.map((message, index) => {
                            return <div key={index} className={styles.message}>{message.message}</div>
                        })
                    }
                </div>
            </div>
        </li>
    )
}
