import * as React from 'react'
const SvgCurrencyRiyal = (props) => (
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
      d="M15 9v2a2 2 0 0 1-4 0m0 0v-1m0 1a2 2 0 0 1-4 0v-1 4a2 2 0 0 1-4 0v-2m15 .01V12m4-2v1a5 5 0 0 1-5 5"
    />
  </svg>
)
export default SvgCurrencyRiyal
