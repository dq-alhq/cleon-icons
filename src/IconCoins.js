import * as React from "react";
const SvgIconCoins = (props) => (
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
      d="M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3M9 14c0-1.657 2.686-3 6-3s6 1.343 6 3M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0S15 7.072 15 6s-1.144-2.062-3-2.598-4.144-.536-6 0S3 4.928 3 6m0 0v10c0 .888.772 1.45 2 2m-2-7c0 .888.772 1.45 2 2"
    />
  </svg>
);
export default SvgIconCoins;
