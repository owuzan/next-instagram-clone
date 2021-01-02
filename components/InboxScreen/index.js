import { useState, useEffect } from 'react'
import styles from './styles.module.scss'

import NoMessage from '../../components/NoMessage'
import ContactList from '../../components/ContactList'
import MessageContent from '../../components/MessageContent'
import MessageHeader from '../../components/MessageHeader'
import MessageFooter from '../../components/MessageFooter'

import useWindowSize from '../../hooks/useWindowSize'


import NewMessage from '../../icons/NewMessage'

export default function Messages() {

    const ww = useWindowSize().width
    const [activeContact, setActiveContact] = useState(-1)
    const [contacts, setContacts] = useState([
        {
            username: "suleyman",
            src: "/suleyman.jpg",
            content: "Buraya uzun bir mesaj yazıyorum bakalım taşan kısmı yan tarafta gizlenecek mi"
        },
        {
            username: "hasanberkayg",
            src: "/hasan.jpg",
            content: "Bir gönderi paylaştı."
        },
        {
            username: "tahirbaba",
            src: "/serdar.jpg",
            content: "Bu Türkler neden böyle :D"
        },
        {
            username: "mustafaersoy",
            src: "/mustafa.jpg",
            content: "Goril olmak"
        },
    ])
    const activeHandle = (e, index) => {
        e.preventDefault()
        setActiveContact(index)
    }

    // no-screen
    // no-message
    // messages
    const [contentScreen, setContentScreen] = useState("no-message")
    useEffect(() => {
        if (activeContact) {
            if (ww >= 735) {
                setContentScreen("messages")
            } else {
                setContentScreen("no-message")
            }
        } else {
            if (ww >= 735) {
                setContentScreen("no-message")
            } else {
                setContentScreen("no-screen")
            }
        }
    })

    return (
        <div className={styles.messagesPage}>
            <div className={styles.messagesWrapper}>
                <div className={styles.messagesSidebar}>
                    <div className={styles.sidebarHeader}>
                        <div></div>
                        <div className={styles.sidebarTop}>
                            owuzan
                        </div>
                        <div className={styles.newMessageIcon}>
                            <NewMessage style={{ fontSize: "24" }} />
                        </div>
                    </div>
                    {/* FIXME activeContact state düzgün çalışmıyor. */}
                    {/* FIXME NoMessage componentinin genişlik ayarı yapılacak */}
                    <ContactList
                        activeContact={activeContact}
                        setActiveContact={setActiveContact}
                        contacts={contacts}
                        setContacts={setContacts}
                        activeHandle={activeHandle}
                    />
                </div>
                <div className={styles.messageContent}>
                    {
                        contentScreen === "no-message" ? <NoMessage /> : ""
                    }
                    {
                        contentScreen === "messages" ?
                            <>
                                <MessageHeader />
                                <MessageContent />
                                <MessageFooter />
                            </> : ""
                    }
                </div>
            </div>
        </div>
    )
}
