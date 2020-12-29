import React, { useState } from 'react'
import './style.scss'
import MessageListItem from '../../components/message-list-item'

export default function ContactList(props) {

    const activeContact = props.activeContact
    const setActiveContact = props.setActiveContact
    const contacts = props.contacts
    const setContacts = props.setContacts
    const activeHandle =  props.activeHandle

    return (
        <div className="contact-list-wrapper">
            <div className="contact-list">
                {
                    contacts.map((contact, index) => {
                        return (
                            <div
                                key={index}
                                onClick={(e) => activeHandle(e, index)}
                                className={activeContact === index ? "contact active-contact" : "contact"}
                            >
                                <MessageListItem src={contact.src} username={contact.username} content={contact.content} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
