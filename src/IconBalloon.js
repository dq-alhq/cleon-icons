import * as React from "react";
const SvgIconBalloon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 8a2 2 0 0 0-2-2m0 11c3.314 0 6-4.03 6-9A6 6 0 1 0 6 8c0 4.97 2.686 9 6 9m0 0v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2"
    />
  </svg>
);
export default SvgIconBalloon;
