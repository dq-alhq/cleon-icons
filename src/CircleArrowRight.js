import * as React from 'react'
const SvgCircleArrowRight = (props) => (
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
      d="m16 12-4-4m4 4H8m8 0-4 4m0-13a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
    />
  </svg>
)
export default SvgCircleArrowRight