import * as React from 'react'
const SvgTextWrap = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h5m-5-6h13a3 3 0 0 1 0 6h-4m0 0 2-2m-2 2 2 2" />
  </svg>
)
export default SvgTextWrap
