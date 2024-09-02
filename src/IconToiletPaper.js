import * as React from "react";
const SvgIconToiletPaper = (props) => (
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
      d="M9 10c0 1.857-.316 3.637-.879 4.95S6.796 17 6 17s-1.559-.738-2.121-2.05C3.316 13.637 3 11.857 3 10s.316-3.637.879-4.95C4.44 3.738 5.204 3 6 3m3 7c0-1.857-.316-3.637-.879-4.95C7.56 3.738 6.796 3 6 3m3 7v10l3-2 3 3 3-2 3 1V10c0-3.866-1.343-7-3-7H6m0 7h.01"
    />
  </svg>
);
export default SvgIconToiletPaper;
