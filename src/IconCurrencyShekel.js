import * as React from "react";
const SvgIconCurrencyShekel = (props) => (
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
      d="M6 18V6h4a4 4 0 0 1 4 4v4m4-8v12h-4a4 4 0 0 1-4-4v-4"
    />
  </svg>
);
export default SvgIconCurrencyShekel;
