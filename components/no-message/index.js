import React from 'react'
import './style.scss'

import Message from '../../icons/Message'

export default function NoMessage() {
    return (
        <div className="no-message-wrapper">
            <div className="no-message">
                <div className="message-icon">
                    <Message size={50} />
                </div>
                <div className="page-title">Mesajların</div>
                <p className="page-description">Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.</p>
                <div className="no-meesage__footer">
                    <button>Mesaj Gönder</button>
                </div>
            </div>
        </div>
    )
}
