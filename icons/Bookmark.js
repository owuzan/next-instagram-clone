import React from 'react'

export default function Bookmark({ size = "1em" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.75 24C20.55 24 20.35 23.9 20.2 23.8L11 14.5L1.8 23.8C1.6 24 1.25 24.1 1 23.95C0.7 23.85 0.5 23.55 0.5 23.25V0.75C0.5 0.35 0.85 0 1.25 0H20.75C21.15 0 21.5 0.35 21.5 0.75V23.25C21.5 23.55 21.3 23.85 21.05 23.95C20.95 24 20.85 24 20.75 24ZM11 13C11.4 13 11.8 13.15 12.1 13.45L20 21.45V1.5H2V21.45L9.9 13.45C10.2 13.15 10.6 13 11 13Z" fill="currentColor" />
        </svg>
    )
}
