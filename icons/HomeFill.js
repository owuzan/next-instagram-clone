import * as React from 'react'

function SvgHomeFill(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#HomeFill_svg__clip0)">
                <path
                    d="M20.854 22h-7.058a.705.705 0 01-.688-.688v-5.637A2.103 2.103 0 0011 13.567a2.133 2.133 0 00-2.108 2.108v5.637c0 .367-.321.688-.688.688H1.146a.705.705 0 01-.688-.688v-10.77c0-.184.092-.367.184-.505L10.496.184c.275-.275.733-.275.962 0l9.854 9.854c.138.138.184.321.184.505v10.77c.046.367-.275.688-.642.688z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="HomeFill_svg__clip0">
                    <path fill="#fff" d="M0 0h22v22H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default SvgHomeFill
