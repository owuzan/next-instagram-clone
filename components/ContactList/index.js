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
                {contacts.map((contact, index) => {
                    index++
                    return (
                        <div
                            key={contact.id}
                            onClick={(e) => activeHandle(e, contact.id)}
                            className={
                                activeContact === contact.id
                                    ? styles.contact +
                                      ' ' +
                                      styles.activeContact
                                    : styles.contact
                            }
                        >
                            <MessageListItem contact={contact} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
