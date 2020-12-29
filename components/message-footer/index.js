import React, { useState } from 'react'
import './style.scss'

import Emoji from '../../icons/Emoji'
import Photo from '../../icons/Photo'
import Like from '../../icons/Like'

export default function MessageFooter() {

    const [input, setInput] = useState("")
    const [keyShift, setKeyShift] = useState(false)

    const inputKeyUpHandle = (e) => e.keyCode === 16 ? setKeyShift(false) : ""
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
                setInput("")
                e.target.setAttribute('rows', 1)
            }
        }, 0)
    }
    const sendMessageHandle = (e) => {
        //Mesaj gönderme işlemleri
        //Mesaj gönderme işlemleri
        //Mesaj gönderme işlemleri
        setTimeout(() => {
            setInput("")
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
        <div className="message-content__footer">
            <div className="message-form-wrapper">
                <div className="message-form-inner">
                    <button>
                        <Emoji size={24} />
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

                    <button>
                        <Photo size={24} />
                    </button>
                    <button>
                        <Like size={24} />
                    </button>
                </div>
            </div>
        </div >
    )
}
