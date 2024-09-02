import * as React from "react";
const SvgIconAperture = (props) => (
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
      d="M3.6 15h10.55M6.551 4.938l3.26 10.034m7.221-10.336-8.535 6.201m12.062 3.673-8.535-6.201m.233 12.607 3.261-10.034M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12"
    />
  </svg>
);
export default SvgIconAperture;
