import * as React from "react";
const SvgIconFeather = (props) => (
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
      d="m16 8.008-14 14m15.5-7H9m3.67 4a2 2 0 0 0 1.416-.588l6.154-6.172a6.003 6.003 0 0 0-8.49-8.49L5.586 9.922A2 2 0 0 0 5 11.336v6.672a1 1 0 0 0 1 1z"
    />
  </svg>
);
export default SvgIconFeather;
