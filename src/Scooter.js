import * as React from 'react'
const SvgScooter = (props) => (
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
      d="M8 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1m1 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgScooter