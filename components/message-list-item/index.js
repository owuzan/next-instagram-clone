import React from 'react'
import UserImage from '../../components/user-image'

export default function MessageListItem({ username = "owuzan", content = "Bu bir test mesajıdır.", src = "owuzan.jpg" }) {
    return (
            <a href="/">
                <div className="message-list__user-image">
                    <UserImage size={56} status="default" src={src} />
                </div>
                <div className="message-list__user-meta">
                    <span>{username}</span>
                    <p>{content}</p>
                </div>
            </a>
    )
}
