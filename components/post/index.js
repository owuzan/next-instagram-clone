import React, { useState } from 'react'
import './style.scss'
import Preferences from '../../icons/Preferences'
import UserImage from '../user-image'
import Like from '../../icons/Like'
import LikeFill from '../../icons/LikeFill'
import Comment from '../../icons/Comment'
import Message from '../../icons/Message'
import Bookmark from '../../icons/Bookmark'
import BookmarkFill from '../../icons/BookmarkFill'

export default function Post({ username = "owuzan", postLikeCount = 144, userSrc = "owuzan.jpg", postSrc = "photo-example.jpg", postDescription="Kahvesiz asla 🍹" }) {
    const [likeStatus, setLikeStatus] = useState(false);
    const [likeCount, setLikeCount] = useState(postLikeCount);
    const [saveStatus, setSaveStatus] = useState(false);
    const [input, setInput] = useState("");
    const [clickTime, setClickTime] = useState("");
    const [comments, setComments] = useState([
        {
            "author": "bujats",
            "message": "Ben geldim, benim evimde bensiz kahve he 😁"
        },
        {
            "author": "suleyman",
            "message": "Afiyet olsun kardeşim ✌ Bırak bu işleri de artık şu projeyi bitirelim. Ara beni, bitirme projesi için Betül hocamız bizi bekliyor 🤙"
        }
    ]);
    const likePost = () => {
        if (likeStatus) {
            setLikeCount(likeCount - 1)
        } else {
            setLikeCount(likeCount + 1)
        }
        setLikeStatus(!likeStatus)
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
                "author": "owuzan",
                "message": inputControl
            })
            setComments(currentComments)
            setInput("")
        }
    }
    const doubleClickHandle = (e) => {
        if (!e.classList.contains('heart-aniamte')) {
            const time = new Date().getTime()
            if ((time - clickTime) < 500) {
                e.classList.add('heart-animate')
                if (!likeStatus) {
                    likePost()
                }
            }
            setClickTime(time)
            setTimeout(() => {
                setClickTime(0)
                e.classList.remove('heart-animate')
            }, 1000)
        }
    }

    return (
        <div className="post-wrapper">
            <div className="post-inner">
                <header>
                    <div className="user-info">
                        <UserImage size={32} src={userSrc} />
                        <a href="#" className="user-name">{username}</a>
                    </div>
                    <div className="post-preferences">
                        <Preferences />
                    </div>
                </header>
                <div className="post-content">
                    <div className="image-wrapper">
                        <div onClick={(e) => doubleClickHandle(e.target)} className="heart">
                            <LikeFill size={96} />
                        </div>
                        <img src={postSrc} alt="" />
                    </div>
                    <div className="post-body">
                        <div className="action-buttons">
                            <button
                                onClick={() => likePost()}
                                className={likeStatus ? "fillRed" : ""} >
                                {
                                    !likeStatus ?
                                        <Like size={22} /> :
                                        <LikeFill size={22} />
                                }
                            </button>
                            <button>
                                <Comment size={22} />
                            </button>
                            <button>
                                <Message size={22} />
                            </button>
                            <button onClick={() => savePost()} style={{
                                "marginLeft": "auto"
                            }}>
                                {
                                    !saveStatus ?
                                        <Bookmark size={22} /> :
                                        <BookmarkFill size={22} />
                                }
                            </button>
                        </div>
                        <div className="post-info">
                            <div className="like-count">
                                {likeCount} beğenme
                            </div>
                            <div className="post-description">
                                <a href="#">{username}</a>
                                <span>{postDescription}</span>
                            </div>
                            <ul className="comments-list">
                                <li className="comments-count">6 yorumun tümünü gör</li>
                                <li>
                                    <span>
                                        <a href="#">erayeserbey</a>
                                    </span>
                                    Birazdan <a href="#">@bujats</a> gelir xd
                                </li>
                                {comments.map((comment, index) => {
                                    return (
                                        <li key={index}>
                                            <span><a href={`@${comment.author}`}>{comment.author}</a></span>
                                            {comment.message}
                                        </li>
                                    )
                                })}
                                <li className="post-time">4 SAAT ÖNCE</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="comment-form">
                        <div className="form-wrapper">
                            <form>
                                <input type="text" value={input} onChange={(e) => inputHandle(e.target.value)} placeholder="Yorum ekle..." required />
                                {
                                    input ?
                                        <button onClick={(e) => sendComment(e)}>Paylaş</button> :
                                        <button disabled>Paylaş</button>
                                }
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    )
}
