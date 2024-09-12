import * as React from 'react'
const SvgPepper = (props) => (
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
      d="M16 8a3 3 0 0 1 3 3 8 8 0 0 1-16 0c0 2.21 2.239 4 5 4s5-1.79 5-4a3 3 0 0 1 3-3m0 0c0-2 2-4 4-4"
    />
  </svg>
)
export default SvgPepper
