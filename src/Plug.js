import * as React from 'react'
const SvgPlug = (props) => (
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
      d="m4 20 3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M9.785 6 18 14.215l-2.054 2.054a5.809 5.809 0 1 1-8.215-8.215z"
    />
  </svg>
)
export default SvgPlug
