import * as React from "react";

function SvgExploreFill(props) {
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
        d="M11 0C4.95 0 0 4.95 0 11s4.95 11 11 11 11-4.95 11-11S17.05 0 11 0zm5.592 6.325l-3.209 6.783a.554.554 0 01-.32.321l-6.784 3.208c-.091.046-.183.046-.275.046-.183 0-.366-.091-.504-.183a.69.69 0 01-.138-.78l3.209-6.783a.554.554 0 01.32-.32l6.784-3.209c.275-.137.596-.091.78.138.228.183.274.504.137.779zM9.717 9.717l-2.292 4.812 4.813-2.291-2.521-2.521z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExploreFill;
