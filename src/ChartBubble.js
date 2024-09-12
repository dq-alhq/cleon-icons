import * as React from 'react'
const SvgChartBubble = (props) => (
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
      d="M3 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
    />
  </svg>
)
export default SvgChartBubble
