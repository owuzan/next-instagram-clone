import UserImage from '../userImage'
import styles from './styles.module.scss'

export default function SuggessionUser({ username = "owuzan", name = "Oğuzhan Yılmaz", src = "owuzan.jpg" }) {
    return (
        <>
            <div className={styles.suggesionUser}>
                <UserImage type="story" src={src} size={32}  />
                <div className={styles.userMeta}>
                    <p><a href="#">{username}</a></p>
                    <span>{name}</span>
                </div>
            </div>
            <button>Takip Et</button>
        </>
    )
}
