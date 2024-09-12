import * as React from 'react'
const SvgIconSwords = (props) => (
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
      d="m5 13 6 6m3.32-1.68L18 21l3-3-3.365-3.365M10 5.5 8 3H3v5l3 2.5M21 3v5l-11 9-4 4-3-3 4-4 9-11z"
    />
  </svg>
)
export default SvgIconSwords
