import * as React from "react";
const SvgIconCurrencyTugrik = (props) => (
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
      d="M7 6h10m-5 0v13m-4-2 8-3m0-4-8 3"
    />
  </svg>
);
export default SvgIconCurrencyTugrik;
