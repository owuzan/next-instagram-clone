import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './styles.module.scss'
import MessageSection from '../MessageSection'
import firebase from '../../lib/firebase'
import { useAuth } from '../../lib/auth'
import { getUserData } from '../../lib/db'

export default function MessageContent({ userId }) {
    const auth = useAuth()
    const [messageGroups, setMessageGroups] = useState([])
    const [userData, setUserData] = useState()
    const messageListBottomRef = useRef()

    const scrollToBottom = () => {
        messageListBottomRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }
    let groups = [],
        group = [],
        lastMe = null,
        getMessages = () => {}

    useEffect(async () => {
        const firestore = firebase.firestore()
        setUserData(await getUserData(userId))
        userData?.id != userId && getMessages()
        getMessages = firestore
            .collection(`users/${auth.user.id}/contacts/${userId}/messages`)
            .orderBy('time', 'asc')
            .where('time', '>', new Date())
            .onSnapshot((snapshot) => {
                // for (const doc of snapshot.docs) {
                // snapshot.docs.forEach((doc) => {
                // })
                groups = []
                snapshot.docs.forEach((doc, index) => {
                    const data = {
                        id: doc.id,
                        ...doc.data(),
                    }
                    // FIXME lastMe konumları düzenlenecek
                    if (data.me) {
                        if (lastMe || lastMe == null) {
                            group.push(data)
                            lastMe = true
                        } else {
                            groups.push(group)
                            group = []
                            group.push(data)
                            lastMe = true
                        }
                    } else {
                        if (!lastMe || lastMe == null) {
                            group.push(data)
                            lastMe = false
                        } else {
                            groups.push(group)
                            group = []
                            group.push(data)
                            lastMe = false
                        }
                    }
                })
                groups.push(group)
                group = []
                setMessageGroups(groups)
            })
    }, [userId])
    return (
        <div className={styles.messageContentInner}>
            <ul>
                {messageGroups.map((messageGroup, index) => {
                    scrollToBottom()
                    return (
                        <MessageSection
                            key={index}
                            src="/suleyman.jpg"
                            list={messageGroup}
                            me={messageGroup[0]?.me && true}
                        />
                    )
                })}
                <li ref={messageListBottomRef}></li>
                {/* {scrollToBottom()} */}
                {/* <MessageSection src="/suleyman.jpg" list={list1} />
                <MessageSection list={list2} me /> */}
            </ul>
        </div>
    )
}
