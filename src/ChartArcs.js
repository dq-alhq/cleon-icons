import * as React from 'react'
const SvgChartArcs = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.924 11.132a5 5 0 1 0-4.056 5.792M3 12a9 9 0 1 0 9-9m-1 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
  </svg>
)
export default SvgChartArcs
