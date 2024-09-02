import * as React from "react";
const SvgIconIron = (props) => (
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
      d="M9 6h7.459a3 3 0 0 1 2.959 2.507l1.387 8.329A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8M12 15h.01"
    />
  </svg>
);
export default SvgIconIron;
