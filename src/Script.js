import * as React from 'react'
const SvgScript = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0 0 6m0 0h1a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8" />
  </svg>
)
export default SvgScript
