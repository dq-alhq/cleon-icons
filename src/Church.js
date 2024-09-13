import * as React from 'react'
const SvgChurch = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18m-11 0v-4a2 2 0 0 1 4 0v4M10 5h4m-2-2v5m0 0-8 8m8-8 8 8M6 21v-7m12 0v7" />
  </svg>
)
export default SvgChurch
