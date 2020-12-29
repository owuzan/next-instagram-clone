import React from 'react'

export default function Search({ size = "1em" }) {
    return (
        <svg fill="none" height={size} viewBox="0 0 48 48" width={size}>
            <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z" fill="currentColor"></path>
            <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z" fill="currentColor"></path>
        </svg>
    )
}
