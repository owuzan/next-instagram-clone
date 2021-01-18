import { useState } from 'react'
import styles from './styles.module.scss'
import * as Icons from '../../icons'
import UserImage from '../UserImage'

const Modal = (props) => {
    const { setShowModal } = props
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
                        />
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.title}>Önerilenler</div>
                    <ul>
                        <li>
                            <UserImage size={44} />
                            <div className={styles.contactInfo}>
                                <div className={styles.username}>owuzan</div>
                                <div className={styles.name}>
                                    Oğuzhan Yılmaz
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserImage size={44} />
                            <div className={styles.contactInfo}>
                                <div className={styles.username}>owuzan</div>
                                <div className={styles.name}>
                                    Oğuzhan Yılmaz
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserImage size={44} />
                            <div className={styles.contactInfo}>
                                <div className={styles.username}>owuzan</div>
                                <div className={styles.name}>
                                    Oğuzhan Yılmaz
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserImage size={44} />
                            <div className={styles.contactInfo}>
                                <div className={styles.username}>owuzan</div>
                                <div className={styles.name}>
                                    Oğuzhan Yılmaz
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserImage size={44} />
                            <div className={styles.contactInfo}>
                                <div className={styles.username}>owuzan</div>
                                <div className={styles.name}>
                                    Oğuzhan Yılmaz
                                </div>
                            </div>
                        </li>
                        <li>
                            <UserImage size={44} />
                            <div className={styles.contactInfo}>
                                <div className={styles.username}>owuzan</div>
                                <div className={styles.name}>
                                    Oğuzhan Yılmaz
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal
