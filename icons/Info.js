import * as React from 'react'

function SvgInfo(props) {
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
                d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5z"
                fill="currentColor"
            />
            <path
                d="M12 8.7a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6zM13.55 17.85h-3.1c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h3.1c.4 0 .75.35.75.75s-.35.75-.75.75z"
                fill="currentColor"
            />
            <path
                d="M12 17.85c-.4 0-.75-.35-.75-.75v-5.35h-.8c-.4 0-.75-.35-.75-.75s.35-.75.75-.75H12c.4 0 .75.35.75.75v6.1c0 .4-.35.75-.75.75z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgInfo
