import * as React from "react";
const SvgIconCurrencyRupiah = (props) => (
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
      d="M4 17V5h3a3 3 0 1 1 0 6H4c5.5 0 5 4 6 6m3.5 1.879v-11.5H16a3 3 0 0 1 0 6h-2.5"
    />
  </svg>
);
export default SvgIconCurrencyRupiah;
