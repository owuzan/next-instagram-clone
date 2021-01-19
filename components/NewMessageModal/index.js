import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import * as Icons from '../../icons'
import UserImage from '../UserImage'
import { useAuth } from '../../lib/auth'
import firebase from '../../lib/firebase'
import { ClipLoader } from 'react-spinners'
import { css } from '@emotion/core'

const Modal = (props) => {
    const { setShowModal, setActiveContact } = props
    const auth = useAuth()
    const firestore = firebase.firestore()
    const [followings, setFollowings] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [contactList, setContactList] = useState([])

    useEffect(async () => {
        const myFollowings = await firestore
            .collection(`users/${auth.user.id}/followings`)
            .get()
            .then((res) => {
                let ids = []
                res.docs.forEach((user) => ids.push(user.id))
                return ids
            })
        myFollowings.forEach(async (user) => {
            let data = await firestore
                .doc(`users/${user}`)
                .get()
                .then((res) => {
                    return res.data()
                })
            setFollowings((users) => {
                return [...users, { id: user, ...data }]
            })
        })
        setLoading(false)
        return () => myFollowings()
    }, [])

    let filteredContacts = []
    useEffect(() => {
        filteredContacts = followings.filter((user) => {
            let username = user.username.toLowerCase()
            let name = user.name.toLowerCase()
            let input = search.toLowerCase()
            return (username.includes(input) || name.includes(input)) && user
        })
        if (search.trim().length) {
            setContactList(filteredContacts)
        } else {
            setContactList(followings)
        }
    }, [search, followings])

    return (
        <div
            className={styles.modal}
            onClick={(e) => {
                if (e.target == e.currentTarget) {
                    setShowModal((showModal) => !showModal)
                }
            }}
        >
            <div className={styles.modalInner}>
                <header>
                    <div className={styles.close}>
                        <button
                            onClick={() =>
                                setShowModal((showModal) => !showModal)
                            }
                        >
                            <Icons.Close />
                        </button>
                    </div>
                    <div className={styles.title}>Yeni Mesaj</div>
                    <div className={styles.next}></div>
                </header>
                <div className={styles.search}>
                    <label htmlFor="newMessageModal__search">Kime:</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            id="newMessageModal__search"
                            placeholder="Ara..."
                            autoComplete="off"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.title}>Önerilenler</div>
                    <ul>
                        {loading ? (
                            <>
                                <ClipLoader
                                    css={css`
                                        margin: 40px auto 0 auto;
                                    `}
                                />
                            </>
                        ) : (
                            contactList.map((user) => {
                                return (
                                    <li
                                        key={user.id}
                                        role="button"
                                        onClick={() => {
                                            setActiveContact(user.id)
                                            setShowModal(false)
                                        }}
                                    >
                                        <UserImage size={44} />
                                        <div className={styles.contactInfo}>
                                            <div className={styles.username}>
                                                {user.username}
                                            </div>
                                            <div className={styles.name}>
                                                {user.name}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal
