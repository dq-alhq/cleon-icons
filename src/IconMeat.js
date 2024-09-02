import * as React from "react";
const SvgIconMeat = (props) => (
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
      d="m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821m-12.691 1.29c1.17-1.171 4.337.095 7.07 2.829s4 5.899 2.828 7.071c-1.17 1.171-4.337-.095-7.07-2.829s-4-5.899-2.828-7.071m0 0c3.905-3.905 9.287-4.855 12.02-2.121 2.734 2.733 1.784 8.115-2.121 12.021M7.5 16l1 1"
    />
  </svg>
);
export default SvgIconMeat;
