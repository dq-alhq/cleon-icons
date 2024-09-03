import * as React from "react";
const SvgIconDrum = (props) => (
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
      d="m3 3 7.2 7.2M21 3l-7.2 7.2m7.2-.9c0 2.485-4.03 4.5-9 4.5m9-4.5c0-2.485-4.03-4.5-9-4.5S3 6.815 3 9.3m18 0v7.2c0 1.194-.948 2.338-2.636 3.182S14.387 21 12 21m0-7.2c-4.97 0-9-2.015-9-4.5m9 4.5V21M3 9.3v7.2c0 1.194.948 2.338 2.636 3.182S9.613 21 12 21m-4.5-7.74v7.11m9-7.11v7.11"
    />
  </svg>
);
export default SvgIconDrum;
