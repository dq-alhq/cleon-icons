import * as React from 'react'
const SvgAdjustment = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-9m3 10H5m9 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
)
export default SvgAdjustment