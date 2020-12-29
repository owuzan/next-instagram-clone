import React from 'react'
import UserImage from '../user-image'

export default function StoryItem({ username = "owuzan", src = "owuzan.jpg" }) {
    return (
        <li className="story-item">
            <UserImage size={58} src={src} />
            <p>{username}</p>
        </li>
    )
}
