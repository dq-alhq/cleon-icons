import * as React from 'react'
const SvgBrandNpm = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15v2h4v-2h12V8H1v7zm0 0V8m7 0v7m3-4v4M4 11v4m7-4v1m9-1v4" />
  </svg>
)
export default SvgBrandNpm
