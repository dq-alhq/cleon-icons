import * as React from 'react'
const SvgListNumbers = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 6h9m-9 6h9m-8 6h8M4 16a2 2 0 0 1 4 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6" />
  </svg>
)
export default SvgListNumbers
