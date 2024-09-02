import * as React from "react";
const SvgIconRecycle = (props) => (
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
      d="m12 17-2 2m0 0 2 2m-2-2h9a2.002 2.002 0 0 0 1.75-2.75l-.55-1M8.536 11l-.732-2.732m0 0L5.072 9m2.732-.732-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.024M15.464 11l2.732.732m0 0L18.928 9m-.732 2.732-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976"
    />
  </svg>
);
export default SvgIconRecycle;
