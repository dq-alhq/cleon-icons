import * as React from "react";
const SvgIconUsers = (props) => (
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
      d="M10 13a8 8 0 0 1 7.937 7M10 13a8 8 0 0 0-8 8h16q0-.505-.063-1M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m12 7h-4.063M22 20q-.001-.477-.056-.944a7.7 7.7 0 0 0-2.053-4.399C18.541 13.241 16.41 12.5 14.5 12.5c2.485 0 4.8-2.17 4.8-4.778 0-1.545-.707-2.916-1.8-3.778A4.34 4.34 0 0 0 14.8 3c-1.013 0-1.548.076-2.3.669M22 20h-4"
    />
  </svg>
);
export default SvgIconUsers;
