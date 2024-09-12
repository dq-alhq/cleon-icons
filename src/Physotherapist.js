import * as React from 'react'
const SvgPhysotherapist = (props) => (
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
      d="m9 15-1-3 4-2m0 0 4 1h3.5M12 10v7m-4 3h7l1-4 4-2m-2 6h3M3 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0m8-13a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgPhysotherapist
