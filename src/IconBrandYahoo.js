import * as React from "react";
const SvgIconBrandYahoo = (props) => (
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
      d="M3 6h5M7 18h7M4.5 6l5.5 7m0 0v5m0-5 6-5m-3.5 0h5m2.5 3v4m0 3v.01"
    />
  </svg>
);
export default SvgIconBrandYahoo;
