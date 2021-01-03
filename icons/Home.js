import * as React from 'react'

function SvgHome(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#Home_svg__clip0)">
                <path
                    d="M20.762 22H13.75a.705.705 0 01-.688-.688v-5.637a2.074 2.074 0 00-2.108-2.108 2.074 2.074 0 00-2.108 2.108v5.637c0 .367-.321.688-.688.688H1.146a.705.705 0 01-.688-.688v-10.77c0-.184.092-.367.184-.505L10.496.184a.665.665 0 01.962 0l9.854 9.854c.184.184.275.505.138.734 0 .046-.046.046-.046.091v10.45c.046.367-.275.688-.642.688zm-6.325-1.375h5.638v-9.9L11 1.65l-9.167 9.167v9.808h5.638v-4.95c0-1.97 1.512-3.483 3.483-3.483s3.483 1.512 3.483 3.483v4.95z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="Home_svg__clip0">
                    <path fill="#fff" d="M0 0h22v22H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default SvgHome
