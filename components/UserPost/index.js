import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import * as Icons from '../../icons'
import UserImage from '../UserImage'
import Link from 'next/link'
import { useAuth } from '../../lib/auth'
import firebase from '../../lib/firebase'
import useWindowSize from '../../hooks/useWindowSize'
import Timeago from 'react-timeago'
import turkishStrings from 'react-timeago/lib/language-strings/tr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

export default function UserPost({ post }) {
    const auth = useAuth()
    const ww = useWindowSize().width
    const firestore = firebase.firestore()
    const { id, username, image, caption, userId } = post
    const formatter = buildFormatter(turkishStrings)
    const [likeCount, setLikeCount] = useState(0)
    const [savedStatus, setSavedStatus] = useState(false)
    const [input, setInput] = useState('')
    const [clickTime, setClickTime] = useState('')
    const [showForm, setShowForm] = useState(false)
    const commentInput = useRef(null)
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
    const [likedStatus, setLikedStatus] = useState(false)
    const isLiked = () => {
        firestore
            .collection(`users/${userId}/posts/${id}/likes`)
            .get()
            .then((res) => {
                res.docs.forEach((user) => {
                    setLikedStatus(user.id == auth.user.id ? true : false)
                })
                setLikeCount(res.docs.length)
            })
    }
    const isSaved = () => {
        firestore
            .doc(`users/${auth.user.id}/savedPosts/${id}/`)
            .get()
            .then((res) => {
                if (res.exists) {
                    setSavedStatus(true)
                } else {
                    setSavedStatus(false)
                }
            })
    }
    const likePost = async () => {
        if (likedStatus) {
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
        setLikedStatus(!likedStatus)
        isLiked()
    }
    const savePost = () => {
        const savedPostsRef = firestore.collection(
            `users/${auth.user.id}/savedPosts`
        )
        if (savedStatus) {
            savedPostsRef.doc(id).delete()
            setSavedStatus(false)
        } else {
            savedPostsRef.doc(id).set({
                time: new Date(),
                ref: `/users/${userId}/posts/${id}`,
            })
            setSavedStatus(true)
        }
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
                if (!likedStatus) {
                    setLikedStatus(true)
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
        isLiked()
        isSaved()
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
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.postBody}>
                        <div className={styles.actionButtons}>
                            <button
                                onClick={() => likePost()}
                                className={likedStatus ? styles.fillRed : ''}
                            >
                                {!likedStatus ? (
                                    <Icons.Like size={22} />
                                ) : (
                                    <Icons.LikeFill size={22} />
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    setShowForm(true)
                                    setTimeout(() => {
                                        commentInput.current.focus()
                                    }, [10])
                                }}
                            >
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
                                {!savedStatus ? (
                                    <Icons.Bookmark size={22} />
                                ) : (
                                    <Icons.BookmarkFill size={22} />
                                )}
                            </button>
                        </div>
                        <div className={styles.postInfo}>
                            {likeCount > 0 ? (
                                <div className={styles.likeCount}>
                                    {likeCount} beğenme
                                </div>
                            ) : (
                                ''
                            )}
                            {caption.length > 0 ? (
                                <div className={styles.postDescription}>
                                    <Link href={`/${username}`}>
                                        <a>{username}</a>
                                    </Link>
                                    <span>{caption}</span>
                                </div>
                            ) : (
                                ''
                            )}
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
                                <li className={styles.postTime}>
                                    <Timeago
                                        date={post.time.toDate()}
                                        formatter={formatter}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {showForm || ww > 600 ? (
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
                                        ref={commentInput}
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
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
