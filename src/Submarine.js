import * as React from 'react'
const SvgSubmarine = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 11-1-3h-5l-1 3m3-3V6a1 1 0 0 1 1-1h1M3 11v6h2l1-1.5L9 17h10a3 3 0 0 0 0-6H9l-3 1.5L5 11z" />
  </svg>
)
export default SvgSubmarine
