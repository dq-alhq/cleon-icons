import * as React from "react";
const SvgIconCurrencyCent = (props) => (
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
      d="M16.007 7.54A5.97 5.97 0 0 0 11.999 6m0 0a6 6 0 0 0-5.992 6c0 3.314 2.682 6 5.992 6m0-12L12 4m-.001 14a5.97 5.97 0 0 0 4-1.536m-4 1.536L12 20"
    />
  </svg>
);
export default SvgIconCurrencyCent;
