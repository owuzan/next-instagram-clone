import { useState, useEffect } from 'react'
import styles from './styles.module.scss'

import NoMessage from '../../components/NoMessage'
import ContactList from '../../components/ContactList'
import MessageContent from '../../components/MessageContent'
import MessageHeader from '../../components/MessageHeader'
import MessageFooter from '../../components/MessageFooter'
import NewMessageModal from '../NewMessageModal'

import useWindowSize from '../../hooks/useWindowSize'
import NewMessage from '../../icons/NewMessage'
import firebase from '../../lib/firebase'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'

export default function Messages() {
    const firestore = firebase.firestore()
    const router = useRouter()
    const auth = useAuth()
    const ww = useWindowSize().width
    const [activeContact, setActiveContact] = useState(null)
    const [contacts, setContacts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const activeHandle = (e, id) => {
        e.preventDefault()
        setActiveContact(id)
    }
    let messageList
    useEffect(async () => {
        router.push('/direct/inbox')
        messageList = firestore
            .collection(`users/${auth.user.id}/contacts`)
            .orderBy('time', 'desc')
            .onSnapshot((res) => {
                let list = []
                // for (const lastMessage of res.docs) {
                res.docs.forEach((lastMessage) => {
                    list.push({
                        id: lastMessage.id,
                        ...lastMessage.data(),
                    })
                })
                setContacts(list)
            })
    }, [])

    // no-screen
    // no-message
    // messages
    const [contentScreen, setContentScreen] = useState('no-message')
    useEffect(() => {
        if (activeContact) {
            if (ww >= 735) {
                setContentScreen('messages')
            } else {
                setContentScreen('no-message')
            }
        } else {
            if (ww >= 735) {
                setContentScreen('no-message')
            } else {
                setContentScreen('no-screen')
            }
        }
    })

    useEffect(() => {
        if (activeContact) {
            router.push(`/direct/t/${activeContact}`)
        }
    }, [activeContact, contentScreen])

    return (
        <div className={styles.messagesPage}>
            <div className={styles.messagesWrapper}>
                <div className={styles.messagesSidebar}>
                    <div className={styles.sidebarHeader}>
                        <div></div>
                        <div className={styles.sidebarTop}>owuzan</div>
                        <button
                            className={styles.newMessageIcon}
                            onClick={() =>
                                setShowModal((showModal) => !showModal)
                            }
                        >
                            <NewMessage style={{ fontSize: '24' }} />
                        </button>
                        {showModal && (
                            <NewMessageModal setShowModal={setShowModal} />
                        )}
                    </div>
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
                    {contentScreen == 'no-message' && <NoMessage />}
                    {contentScreen == 'messages' && (
                        <>
                            <MessageHeader userId={activeContact} />
                            <MessageContent userId={activeContact} />
                            <MessageFooter userId={activeContact} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
