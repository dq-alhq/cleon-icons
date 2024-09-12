import * as React from 'react'
const SvgGripHorizontal = (props) => (
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
      d="M4 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0M18 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M18 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgGripHorizontal
