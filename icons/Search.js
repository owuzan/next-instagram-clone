import * as React from "react";

function SvgSearch(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Search_svg__clip0)" fill="currentColor">
        <path d="M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10zm0-18.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z" />
        <path d="M23.3 24.05c-.2 0-.4-.05-.55-.2L16 17.1c-.3-.3-.3-.75 0-1.05.3-.3.75-.3 1.05 0l6.75 6.75c.3.3.3.75 0 1.05-.1.15-.3.2-.5.2z" />
      </g>
      <defs>
        <clipPath id="Search_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgSearch;
