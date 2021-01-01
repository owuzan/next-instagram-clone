import * as React from "react";

function SvgMessage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Message_svg__clip0)">
        <path
          d="M21.908 1.742c-.137-.23-.366-.367-.596-.367H.688c-.275.046-.55.23-.641.458-.092.23-.046.55.137.78l7.288 7.15L9.99 20.12c.046.275.276.458.55.504h.092c.23 0 .459-.137.596-.32L21.863 2.428c.183-.183.183-.458.045-.687zM2.383 2.796h16.271L8.25 8.57 2.383 2.796zm8.571 15.4L8.937 9.762l10.496-5.82-8.479 14.254z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="Message_svg__clip0">
          <path fill="#fff" d="M0 0h22v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgMessage;
