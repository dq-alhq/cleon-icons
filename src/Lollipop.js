import * as React from 'react'
const SvgLollipop = (props) => (
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
      d="M7 10a7 7 0 0 0 7 7m-7-7a7 7 0 0 1 7-7m-7 7a3.5 3.5 0 1 0 7 0m0 7a7 7 0 0 0 7-7m-7 7a3.5 3.5 0 1 0 0-7m7 0a7 7 0 0 0-7-7m7 7a3.5 3.5 0 1 0-7 0m0-7a3.5 3.5 0 1 0 0 7M3 21l6-6"
    />
  </svg>
)
export default SvgLollipop
