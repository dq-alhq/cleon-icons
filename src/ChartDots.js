import * as React from 'react'
const SvgChartDots = (props) => (
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
      d="M3 3v18h18M10.16 10.62l2.34 2.88m2.588-.172 2.837-4.586M7 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-5 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgChartDots
