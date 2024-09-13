import * as React from 'react'
const SvgArrowGuide = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7m0 0-3-3m3 3-3 3" />
  </svg>
)
export default SvgArrowGuide
