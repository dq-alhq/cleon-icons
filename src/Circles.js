import * as React from 'react'
const SvgCircles = (props) => (
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
      d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M2.5 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0M13.5 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
    />
  </svg>
)
export default SvgCircles
