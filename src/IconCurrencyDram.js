import * as React from "react";
const SvgIconCurrencyDram = (props) => (
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
      d="M4 10a6 6 0 1 1 12 0v10m-4-4h8m-8-4h8"
    />
  </svg>
);
export default SvgIconCurrencyDram;
