import * as React from 'react'
const SvgArrowCurveLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 7-4-4m0 0L6 7m4-4v4.394A6.74 6.74 0 0 0 13 13a6.74 6.74 0 0 1 3 5.606V21"
    />
  </svg>
)
export default SvgArrowCurveLeft
