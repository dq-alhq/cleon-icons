import * as React from 'react'
const SvgEyeglass = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6L3 14m0 0v2.5a3.5 3.5 0 1 0 7 0V14zM16 4h2l3 10m0 0h-7v2.5a3.5 3.5 0 1 0 7 0zm-11 2h4" />
  </svg>
)
export default SvgEyeglass
