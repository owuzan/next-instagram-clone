import React, { useState } from 'react'
import styles from './styles.module.scss'
import * as Icons from '../../icons'
import sendMessage from '../../utility/sendMessage'
import { useAuth } from '../../lib/auth'

export default function MessageFooter({ userId }) {
    const [input, setInput] = useState('')
    const [keyShift, setKeyShift] = useState(false)
    const auth = useAuth()
    const inputKeyUpHandle = (e) => (e.keyCode === 16 ? setKeyShift(false) : '')
    const inputKeyDownHandle = (e) => {
        if (e.keyCode === 16) {
            setKeyShift(true)
        }
        if (e.keyCode === 13 && !keyShift) {
            e.preventDefault()
            messageControlHandle(e)
        }
    }
    const inputHandle = (e) => {
        setInput(e.target.value)
        autoResizeHandle(e)
    }

    const messageControlHandle = (e) => {
        setInput(input.trim())
        setTimeout(() => {
            if (input.length > 0) {
                sendMessageHandle(e)
            } else {
                setInput('')
                e.target.setAttribute('rows', 1)
            }
        }, 0)
    }
    const sendMessageHandle = (e) => {
        //Mesaj gönderme işlemleri
        sendMessage(auth.user.id, userId, input)
        setTimeout(() => {
            setInput('')
            e.target.setAttribute('rows', 1)
        }, 0)
    }

    const autoResizeHandle = (e) => {
        const textarea = e.target
        textarea.style.overflowY = 'hidden'
        textarea.style.resize = 'none'
        const rowsCount = textarea.value.split('\n').length
        if (rowsCount > 5) {
            textarea.setAttribute('rows', 5)
            textarea.style.overflowY = 'auto'
        } else {
            textarea.setAttribute('rows', rowsCount)
        }
    }
    return (
        <div className={styles.messageContentFooter}>
            <div className={styles.messageFormWrapper}>
                <div className={styles.messageFormInner}>
                    <button style={{ fontSize: '24px' }}>
                        <Icons.Emoji />
                    </button>

                    <textarea
                        onKeyDown={(e) => inputKeyDownHandle(e)}
                        onKeyUp={(e) => inputKeyUpHandle(e)}
                        onChange={(e) => inputHandle(e)}
                        placeholder="Mesaj..."
                        spellCheck="false"
                        rows="1"
                        value={input}
                    ></textarea>

                    <button style={{ fontSize: '24px' }}>
                        <Icons.Photo />
                    </button>
                    <button style={{ fontSize: '24px' }}>
                        <Icons.Like />
                    </button>
                </div>
            </div>
        </div>
    )
}
