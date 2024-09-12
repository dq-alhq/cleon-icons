import * as React from 'react'
const SvgChartCircles = (props) => (
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
      d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0"
    />
  </svg>
)
export default SvgChartCircles
