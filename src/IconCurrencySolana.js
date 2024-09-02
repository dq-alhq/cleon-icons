import * as React from "react";
const SvgIconCurrencySolana = (props) => (
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
      d="m20 14-4 4H4l4-4m12 0H8m12 0-4-4m-8 4-4-4m0 0h12M4 10l4-4h12l-4 4"
    />
  </svg>
);
export default SvgIconCurrencySolana;
