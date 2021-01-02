import styles from './styles.module.scss'
import MessageListItem from '../MessageListItem'

export default function ContactList(props) {

    const activeContact = props?.activeContact
    const setActiveContact = props?.setActiveContact
    const contacts = props?.contacts
    const setContacts = props?.setContacts
    const activeHandle = props?.activeHandle

    return (
        <div className={styles.contactListWrapper}>
            <div className={styles.contactList}>
                {
                    contacts.map((contact, index) => {
                        return (
                            <div
                                key={index}
                                onClick={(e) => activeHandle(e, index)}
                                className={activeContact === index ? styles.contact + " " + styles.activeContact : styles.contact}
                            >
                                <MessageListItem src={contact.src} username={contact.username} content={contact.content} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
