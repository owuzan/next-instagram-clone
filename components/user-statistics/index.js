import React from 'react'
import './style.scss'

export default function UserStatistics() {
    return (
        <ul className="user-statistics">
            <li>
                <span className="count">11</span>
                <span>gönderi</span>
            </li>
            <li>
                <span className="count">341</span>
                <span>takipçi</span>
            </li>
            <li>
                <span className="count">429</span>
                <span>takip</span>
            </li>
        </ul>
    )
}
