import * as React from 'react'
const SvgShapes2 = (props) => (
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
      d="m14 3 7 7m-7 0 7-7M3 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M2.5 21h8l-4-7zM14 14h7v7h-7z"
    />
  </svg>
)
export default SvgShapes2