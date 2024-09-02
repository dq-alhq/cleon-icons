import * as React from "react";
const SvgIconScale = (props) => (
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
      d="M7 20h10M6 6l6-1 6 1M6 6l3 6a3 3 0 0 1-6 0zm12 0 3 6a3 3 0 0 1-6 0zm-6-3v17"
    />
  </svg>
);
export default SvgIconScale;
