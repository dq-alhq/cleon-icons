import * as React from 'react'
const SvgClock = (props) => (
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
      d="m15 14-3-2V7m-9 5a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12"
    />
  </svg>
)
export default SvgClock
