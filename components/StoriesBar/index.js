import styles from './styles.module.scss'
import StoryItem from '../StoryItem'

export default function StoriesBar() {
    return (
        <div className={styles.storiesBar}>
            <div className={styles.storiesInner}>
                <ul className={styles.stories}>
                    <StoryItem />
                    <StoryItem username="suleyman" src="suleyman.jpg" />
                    <StoryItem username="musto" src="mustafa.jpg" />
                    <StoryItem username="erkanke" src="erkan.jpg" />
                    <StoryItem username="tahirbaba" src="serdar.jpg" />
                </ul>
            </div>
        </div>
    )
}
