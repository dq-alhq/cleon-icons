import * as React from 'react'
const SvgArrowsMinimize = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9h4m0 0V5m0 4L3 3m2 12h4m0 0v4m0-4-6 6M19 9h-4m0 0V5m0 4 6-6m-2 12h-4m0 0v4m0-4 6 6" />
  </svg>
)
export default SvgArrowsMinimize
