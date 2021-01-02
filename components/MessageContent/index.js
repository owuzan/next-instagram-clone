import styles from './styles.module.scss'
import MessageSection from '../MessageSection'

export default function MessageContent() {

    const list1 = [
        {
            message: "Buraya içerik gelecek"
        },
        {
            message: "Toplu mesaj gönderimi bu şekilde olacak."
        }
    ]
    const list2 = [
        {
            me: true,
            message: "Buraya da benim içeriklerim gelecek."
        },
        {
            me: true,
            message: "Buraya uzun bir mesaj yazıyorum bakalım taşan kısmı yan tarafta gizlenecek mi"
        }
    ]
    return (
        <div className={styles.messageContentInner}>
            <ul>
                <MessageSection src="/suleyman.jpg" list={list1} />
                <MessageSection list={list2} me />
            </ul>
        </div>
    )
}
