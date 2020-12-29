import React from 'react'
import './style.scss'
import UserImage from '../user-image'

export default function SuggessionUser({ username = "owuzan", name = "Oğuzhan Yılmaz", src = "owuzan.jpg" }) {
    return (
        <>
            <div className="suggesion-user">
                <UserImage size={32} status="default" src={src} />
                <div className="user-meta">
                    <p><a href="#">{username}</a></p>
                    <span>{name}</span>
                </div>
            </div>
            <button>Takip Et</button>
        </>
    )
}
