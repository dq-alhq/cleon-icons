import * as React from 'react'
const SvgBroadcast = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 19.364a9 9 0 1 0-12.728 0m9.9-2.828a5 5 0 1 0-7.072 0M11 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
  </svg>
)
export default SvgBroadcast
