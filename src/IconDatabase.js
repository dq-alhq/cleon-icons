import * as React from "react";
const SvgIconDatabase = (props) => (
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
      d="M4 6c0 .796.843 1.559 2.343 2.121S9.878 9 12 9s4.157-.316 5.657-.879S20 6.796 20 6M4 6c0-.796.843-1.559 2.343-2.121S9.878 3 12 3s4.157.316 5.657.879S20 5.204 20 6M4 6v6m16-6v6M4 12c0 .796.843 1.559 2.343 2.121S9.878 15 12 15s4.157-.316 5.657-.879S20 12.796 20 12M4 12v6c0 .796.843 1.559 2.343 2.121S9.878 21 12 21s4.157-.316 5.657-.879S20 18.796 20 18v-6"
    />
  </svg>
);
export default SvgIconDatabase;
