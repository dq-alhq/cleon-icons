import * as React from 'react'
const SvgCircleArrowDown = (props) => (
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
      d="m8 12 4 4m0 0V8m0 8 4-4M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12"
    />
  </svg>
)
export default SvgCircleArrowDown