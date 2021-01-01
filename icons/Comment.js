import * as React from "react";

function SvgComment(props) {
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
        d="M23.75 23.05l-1.4-5.5c.9-1.65 1.4-3.55 1.4-5.55C23.75 5.5 18.5.25 12 .25S.25 5.5.25 12 5.5 23.75 12 23.75c2 0 3.9-.5 5.55-1.4l5.5 1.4c.4.1.8-.3.7-.7zM22.25 12c0 2-.5 3.5-1.3 5-.1.2-.15.45-.1.7l1.05 4.2-4.15-1.05c-.25-.05-.5-.05-.7.1-.9.5-2.6 1.3-5 1.3-5.7 0-10.3-4.6-10.3-10.25S6.35 1.75 12 1.75 22.25 6.35 22.25 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComment;
