import * as React from 'react'
const SvgCurrencyRenminbi = (props) => (
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
      d="M15 9v8a2 2 0 0 0 4 0m0-8H5m14-4H5m4 4v4c0 2.5-.667 4-2 6"
    />
  </svg>
)
export default SvgCurrencyRenminbi
