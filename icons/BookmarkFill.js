import * as React from "react";

function SvgBookmarkFill(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#BookmarkFill_svg__clip0)">
        <path
          d="M21.75 24c-.2 0-.4-.1-.55-.2L12 14.45 2.8 23.8c-.2.2-.55.3-.8.15-.3-.1-.5-.4-.5-.7V.75c0-.4.35-.75.75-.75h19.5c.4 0 .75.35.75.75v22.5c0 .3-.2.6-.45.7-.1.05-.2.05-.3.05z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="BookmarkFill_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBookmarkFill;
