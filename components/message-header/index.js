import React from 'react'
import './style.scss'

import UserUmage from '../user-image'

import Info from '../../icons/Info'

export default function MessageHeader() {
    return (
        <div className="message-content__header">
            <div className="contact-info">
                <UserUmage status size={24} src="suleyman.jpg" />
                <span className="contact-username">
                    suleyman
                </span>
            </div>
            <button className="user-info-button">
                <Info size={24} />
            </button>
        </div>
    )
}
