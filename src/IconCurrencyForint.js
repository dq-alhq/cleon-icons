import * as React from "react";
const SvgIconCurrencyForint = (props) => (
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
      d="M11 4H7a3 3 0 0 0-3 3v12m6-8H4m12-7v13a2 2 0 0 0 2 2h2M19 9h-5"
    />
  </svg>
);
export default SvgIconCurrencyForint;
