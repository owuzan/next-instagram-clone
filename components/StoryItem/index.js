import UserImage from '../userImage'
import styles from './styles.module.scss'

export default function StoryItem({ username = "owuzan", src = "owuzan.jpg" }) {
    return (
        <li className={styles.storyItem}>
            <UserImage type="story" size={56} />
            <p>{username}</p>
        </li>
    )
}
