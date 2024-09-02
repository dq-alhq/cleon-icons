import * as React from "react";
const SvgIconBook = (props) => (
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
      d="M12 19a9 9 0 0 0-9 0V6a9 9 0 0 1 9 0m0 13a9 9 0 0 1 9 0V6a9 9 0 0 0-9 0m0 13V6"
    />
  </svg>
);
export default SvgIconBook;
