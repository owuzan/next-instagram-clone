import * as React from "react";

function SvgNewMessage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#NewMessage_svg__clip0)" fill="currentColor">
        <path d="M18.382 24.065H4.636A4.586 4.586 0 010 19.43V5.684a4.587 4.587 0 014.636-4.637h7.91a.818.818 0 010 1.637h-7.91a2.973 2.973 0 00-3 3v13.745a2.972 2.972 0 003 3h13.746a2.974 2.974 0 003-3V11.52a.818.818 0 011.636 0v7.91a4.586 4.586 0 01-4.636 4.635z" />
        <path d="M9.545 18.993H5.891a.818.818 0 01-.818-.818V14.52c0-.217.086-.425.24-.578L18.6.687a2.427 2.427 0 013.393 0l1.363 1.364a2.427 2.427 0 010 3.393L10.102 18.753a.818.818 0 01-.557.24zM6.71 17.356h2.498l13.015-13.09a.79.79 0 000-1.091L20.858 1.81a.791.791 0 00-1.09 0L6.675 14.825l.033 2.531z" />
        <path d="M20.836 7.647a.824.824 0 01-.6-.24L16.658 3.83a.818.818 0 011.156-1.156l3.6 3.6a.812.812 0 010 1.156.824.824 0 01-.578.218z" />
      </g>
      <defs>
        <clipPath id="NewMessage_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgNewMessage;
