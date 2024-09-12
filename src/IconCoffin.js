import * as React from 'react'
const SvgIconCoffin = (props) => (
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
      d="M13 21H7L5 9l2-6h6m0 18 2-12-2-6m0 18h4l2-12-2-6h-4m-3 4v5M8 9h4"
    />
  </svg>
)
export default SvgIconCoffin
