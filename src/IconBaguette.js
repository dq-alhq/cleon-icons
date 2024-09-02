import * as React from "react";
const SvgIconBaguette = (props) => (
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
      d="M9.5 7.5 11 11m-4.5-.5L8 14m4.5-9.5L14 8m-8.372 3.283 5.644-5.637c2.665-2.663 5.924-3.747 8.663-1.205l.188.181a2.99 2.99 0 0 1 0 4.228L8.836 20.124a3 3 0 0 1-4.089.135l-.143-.135C1.876 17.4 2.9 14.007 5.628 11.283"
    />
  </svg>
);
export default SvgIconBaguette;
