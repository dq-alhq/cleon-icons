import * as React from 'react'
const SvgSquareRoundedX = (props) => (
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
      d="m10 10 4 4m0-4-4 4m2-11c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"
    />
  </svg>
)
export default SvgSquareRoundedX