import * as React from 'react'
const SvgRipple = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7q4.5-3 9 0t9 0M3 17q4.5-3 9 0t9 0M3 12q4.5-3 9 0t9 0" />
  </svg>
)
export default SvgRipple
