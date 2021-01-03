import * as React from 'react'

function SvgExplore(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0C4.95 0 0 4.95 0 11s4.95 11 11 11 11-4.95 11-11S17.05 0 11 0zm0 20.625A9.624 9.624 0 011.375 11 9.624 9.624 0 0111 1.375 9.624 9.624 0 0120.625 11 9.624 9.624 0 0111 20.625zm4.675-15.217L8.892 8.617a.554.554 0 00-.321.32l-3.208 6.784c-.138.275-.092.596.137.779.138.137.32.183.504.183.092 0 .184 0 .275-.046l6.784-3.208a.554.554 0 00.32-.32l3.209-6.784c.137-.275.091-.596-.138-.78-.183-.228-.504-.274-.779-.137zm-3.392 6.875l-2.52-2.52 4.812-2.292-2.292 4.812z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgExplore
