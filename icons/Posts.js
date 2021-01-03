import * as React from 'react'

function SvgPosts(props) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5.75h-21c-.4 0-.75.35-.75.75v21c0 .4.35.75.75.75h21c.4 0 .75-.35.75-.75v-21c0-.4-.35-.75-.75-.75zM2.25 2.25h5.5v5.5h-5.5v-5.5zm0 7h5.5v5.5h-5.5v-5.5zm5.5 12.5h-5.5v-5.5h5.5v5.5zm7 0h-5.5v-5.5h5.5v5.5zm0-7h-5.5v-5.5h5.5v5.5zm0-7h-5.5v-5.5h5.5v5.5zm7 14h-5.5v-5.5h5.5v5.5zm0-7h-5.5v-5.5h5.5v5.5zm0-7h-5.5v-5.5h5.5v5.5z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgPosts
