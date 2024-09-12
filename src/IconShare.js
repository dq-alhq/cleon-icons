import * as React from 'react'
const SvgIconShare = (props) => (
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
      d="m8.7 10.7 6.6-3.4m-6.6 6 6.6 3.4M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
)
export default SvgIconShare
