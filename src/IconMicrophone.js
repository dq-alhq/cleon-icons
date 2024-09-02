import * as React from "react";
const SvgIconMicrophone = (props) => (
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
      d="M5 10a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7m-7 7v4m-4 0h8M9 5a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z"
    />
  </svg>
);
export default SvgIconMicrophone;
