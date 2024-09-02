import * as React from "react";
const SvgIconLemon = (props) => (
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
      d="M5.868 15.06a6.5 6.5 0 0 0 9.192 0m0 0a6.5 6.5 0 0 0 .001-9.192m0 9.192-4.597-4.596m0 0v6.364m0-6.364h6.364m.708-7.071c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0z"
    />
  </svg>
);
export default SvgIconLemon;
