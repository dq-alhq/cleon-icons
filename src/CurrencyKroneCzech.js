import * as React from 'react'
const SvgCurrencyKroneCzech = (props) => (
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
      d="M5 6v12m6-12c0 3-2.5 6-6 6 3.5 0 6 3 6 6m8-12-2 2-2-2m4 6h-2a3 3 0 0 0 0 6h2"
    />
  </svg>
)
export default SvgCurrencyKroneCzech
