import * as React from 'react'
const SvgMessageCode = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9.5 8 12l2 2.5m4-5 2 2.5-2 2.5M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
  </svg>
)
export default SvgMessageCode