import * as React from "react";

function SvgMessageFill(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#MessageFill_svg__clip0)">
        <path
          d="M21.908 1.742c-.137-.23-.366-.367-.596-.367H.688c-.275.046-.55.23-.641.458-.092.23-.046.55.137.78l6.05 5.958c.23.183.505.275.78.137l7.608-3.666c.32-.138.733-.046.916.229.184.32.092.733-.229.917l-7.15 4.537c-.229.138-.366.458-.32.733l2.108 8.709c.046.275.275.458.55.504h.091c.23 0 .459-.138.596-.321L21.817 2.475c.229-.23.229-.504.091-.733z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="MessageFill_svg__clip0">
          <path fill="#fff" d="M0 0h22v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgMessageFill;
