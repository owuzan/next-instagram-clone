import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import * as Icons from '../../icons'
import UserImage from '../UserImage'
import Link from 'next/link'
import { useAuth } from '../../lib/auth'
import firebase from '../../lib/firebase'

export default function UserPost(props) {
    const auth = useAuth()
    const firestore = firebase.firestore()
    const { id, username, userSrc, postSrc, postDescription, userId } = props
    const [likeCount, setLikeCount] = useState(0)
    const [saveStatus, setSaveStatus] = useState(false)
    const [input, setInput] = useState('')
    const [clickTime, setClickTime] = useState('')
    const [comments, setComments] = useState([
        {
            author: 'bujats',
            message: 'Ben geldim, benim evimde bensiz kahve he 😁',
        },
        {
            author: 'suleyman',
            message:
                'Afiyet olsun kardeşim ✌ Bırak bu işleri de artık şu projeyi bitirelim. Ara beni, bitirme projesi için Betül hocamız bizi bekliyor 🤙',
        },
    ])
    const [likeStatus, setLikeStatus] = useState(false)
    const getLike = () => {
        firestore
            .collection(`users/${userId}/posts/${id}/likes`)
            .get()
            .then((res) => {
                res.docs.forEach((user) => {
                    setLikeStatus(user.id == auth.user.id ? true : false)
                })
                setLikeCount(res.docs.length)
            })
    }
    const likePost = async () => {
        if (likeStatus) {
            await firestore
                .collection(`users/${userId}/posts/${id}/likes`)
                .doc(auth.user.id)
                .delete()
            setLikeCount((likeCount) => likeCount - 1)
        } else {
            await firestore
                .collection(`users/${userId}/posts/${id}/likes`)
                .doc(auth.user.id)
                .set({ time: new Date() })
            setLikeCount((likeCount) => likeCount + 1)
        }
        setLikeStatus(!likeStatus)
        getLike()
    }
    const savePost = () => {
        setSaveStatus(!saveStatus)
    }
    const inputHandle = (value) => {
        setInput(value)
    }
    const sendComment = (e) => {
        e.preventDefault()
        let inputControl = input.trim()
        if (inputControl.length > 0) {
            let currentComments = comments

            currentComments.push({
                author: 'owuzan',
                message: inputControl,
            })
            setComments(currentComments)
            setInput('')
        }
    }
    const doubleClickHandle = (e) => {
        if (!e.classList.contains(styles.heartAnimate)) {
            const time = new Date().getTime()
            if (time - clickTime < 500) {
                e.classList.add(styles.heartAnimate)
                if (!likeStatus) {
                    likePost()
                }
            }
            setClickTime(time)
            setTimeout(() => {
                setClickTime(0)
                e.classList.remove(styles.heartAnimate)
            }, 1000)
        }
    }

    useEffect(() => {
        getLike()
    }, [])
    return (
        <div className={styles.postWrapper}>
            <div className={styles.postInner}>
                <header>
                    <div className={styles.userInfo}>
                        <Link href={`/${username}`}>
                            <a style={{ display: 'flex' }}>
                                <UserImage size={32} />
                            </a>
                        </Link>
                        <Link href={`/${username}`}>
                            <a className={styles.userName}>{username}</a>
                        </Link>
                    </div>
                    <div className={styles.postPreferences}>
                        <Icons.Preferences />
                    </div>
                </header>
                <div className={styles.postContent}>
                    <div className={styles.imageWrapper}>
                        <div
                            onClick={(e) => doubleClickHandle(e.target)}
                            className={styles.heart}
                        >
                            <Icons.LikeFill size={96} />
                        </div>
                        <img src={postSrc} alt="" />
                    </div>
                    <div className={styles.postBody}>
                        <div className={styles.actionButtons}>
                            <button
                                onClick={() => likePost()}
                                className={likeStatus ? styles.fillRed : ''}
                            >
                                {!likeStatus ? (
                                    <Icons.Like size={22} />
                                ) : (
                                    <Icons.LikeFill size={22} />
                                )}
                            </button>
                            <button>
                                <Icons.Comment size={22} />
                            </button>
                            <button>
                                <Icons.Message size={22} />
                            </button>
                            <button
                                onClick={() => savePost()}
                                style={{
                                    marginLeft: 'auto',
                                }}
                            >
                                {!saveStatus ? (
                                    <Icons.Bookmark size={22} />
                                ) : (
                                    <Icons.BookmarkFill size={22} />
                                )}
                            </button>
                        </div>
                        <div className={styles.postInfo}>
                            <div className={styles.likeCount}>
                                {likeCount} beğenme
                            </div>
                            <div className={styles.postDescription}>
                                <a href="#">{username}</a>
                                <span>{postDescription}</span>
                            </div>
                            <ul className={styles.commentsList}>
                                <li className={styles.commentsCount}>
                                    6 yorumun tümünü gör
                                </li>
                                <li>
                                    <span>
                                        <a href="#">erayeserbey</a>
                                    </span>
                                    Birazdan <a href="#">@bujats</a> gelir xd
                                </li>
                                {comments.map((comment, index) => {
                                    return (
                                        <li key={index}>
                                            <span>
                                                <a href={`@${comment.author}`}>
                                                    {comment.author}
                                                </a>
                                            </span>
                                            {comment.message}
                                        </li>
                                    )
                                })}
                                <li className={styles.postTime}>4 SAAT ÖNCE</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className={styles.commentForm}>
                        <div className={styles.formWrapper}>
                            <form>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) =>
                                        inputHandle(e.target.value)
                                    }
                                    placeholder="Yorum ekle..."
                                    required
                                />
                                {input ? (
                                    <button onClick={(e) => sendComment(e)}>
                                        Paylaş
                                    </button>
                                ) : (
                                    <button disabled>Paylaş</button>
                                )}
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
