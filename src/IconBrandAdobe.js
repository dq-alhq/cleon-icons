import * as React from "react";
const SvgIconBrandAdobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.667 3H22v17.333zM9.4 3H2v17.334zM12 9.4l4.733 10.933h-3.066l-1.4-3.466H8.8z"
    />
  </svg>
);
export default SvgIconBrandAdobe;
