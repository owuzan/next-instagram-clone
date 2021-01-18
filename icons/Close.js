import * as React from 'react'

function SvgClose(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.675 3.675L10.312 9l5.325 5.325a.544.544 0 010 .788l-.524.524a.544.544 0 01-.788 0L9 10.313l-5.325 5.363a.544.544 0 01-.787 0l-.526-.525a.544.544 0 010-.787L7.688 9 2.325 3.675a.544.544 0 010-.787l.525-.526a.544.544 0 01.788 0L9 7.688l5.363-5.362a.544.544 0 01.787 0l.525.525c.225.225.225.6 0 .825z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgClose
