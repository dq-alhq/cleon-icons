import * as React from 'react'
const SvgDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
  </svg>
)
export default SvgDot