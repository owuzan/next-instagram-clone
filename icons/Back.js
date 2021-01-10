import * as React from 'react'

function SvgBack(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20 16.75c-.2 0-.4-.05-.55-.2L12 9.05l-7.45 7.5c-.3.3-.75.3-1.05 0-.3-.3-.3-.75 0-1.05l8-8c.3-.3.75-.3 1.05 0l8 8c.3.3.3.75 0 1.05-.15.15-.35.2-.55.2z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgBack
