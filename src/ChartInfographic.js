import * as React from 'react'
const SvgChartInfographic = (props) => (
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
      d="M11 7a4 4 0 1 1-4-4m4 4a4 4 0 0 0-4-4m4 4H7V3m2 14v4m8-7v7m-4-8v8m8-9v9"
    />
  </svg>
)
export default SvgChartInfographic
