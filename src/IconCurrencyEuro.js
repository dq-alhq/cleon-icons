import * as React from "react";
const SvgIconCurrencyEuro = (props) => (
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
      d="M17.2 7c-.844-.965-1.913-1.617-3.074-1.876a5.2 5.2 0 0 0-3.45.423c-1.089.534-2.019 1.43-2.672 2.579A7.86 7.86 0 0 0 7 12c0 1.378.349 2.726 1.003 3.874s1.583 2.045 2.673 2.58c1.089.533 2.289.68 3.45.422 1.16-.259 2.23-.911 3.073-1.876M13 10H5m0 4h8"
    />
  </svg>
);
export default SvgIconCurrencyEuro;
