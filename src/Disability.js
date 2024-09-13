import * as React from 'react'
const SvgDisability = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11a5 5 0 1 0 3.95 7.95M19 20l-4-5h-4l3-5-4-3-4 1m9-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
  </svg>
)
export default SvgDisability
