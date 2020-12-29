import React from 'react'
import './style.scss'

export default function UserImage({ size = 56, status = "story", src = "/user.jpg", alt = "", profile = "" }) {
    return (
        <div className="UserImage">
            <div className={status.toString()}>
                <div className="story-inner">
                    {
                        profile ?
                            <img src={src} className="profile-page-image" alt={alt} /> :
                            <img src={src} height={size} width={size} alt={alt} />
                    }
                </div>
            </div>
        </div>
    )
}
