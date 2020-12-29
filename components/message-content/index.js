import React from 'react'
import './style.scss'

import MessageSection from '../../components/message-section'

export default function MessageContent() {

    const list1 = [
        {
            message: "Buraya içerik gelecek"
        },
        {
            message: "Toplu mesaj gönderimi bu şekilde olacak."
        }
    ]
    const list2 = [
        {
            me: true,
            message: "Buraya da benim içeriklerim gelecek."
        },
        {
            me: true,
            message: "Buraya uzun bir mesaj yazıyorum bakalım taşan kısmı yan tarafta gizlenecek mi"
        }
    ]
    return (
        <div className="message-content-inner">
            <ul>
                <MessageSection src="/suleyman.jpg" list={list1} />
                <MessageSection list={list2} me />
            </ul>
        </div>
    )
}
