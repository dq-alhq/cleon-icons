import * as React from 'react'
const SvgChartBarDecreasing = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h3M7 6h12" />
  </svg>
)
export default SvgChartBarDecreasing