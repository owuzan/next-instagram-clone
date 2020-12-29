import React from 'react'
import UserImage from '../user-image'

export default function MessageSection(
    {
        src = "owuzan.jpg",
        me = false,
        list = [
            {
                message: "Dur lan 2 dk karışma denemek için yazıyorum"
            },
            {
                message: "Ne oluyor lan 😂"
            }
        ]
    }
) {
    return (
        <li className={me ? "me" : ""}>
            <div className="message-section">
                <div className="user-image">
                    <UserImage src={src} status="default" size={24} />
                </div>
                <div className="section-messages">
                    {
                        list.map((message, index) => {
                            return <div key={index} className={"message"}>{message.message}</div>
                        })
                    }
                </div>
            </div>
        </li>
    )
}
