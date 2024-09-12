import * as React from 'react'
const SvgArrowsDownUp = (props) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 3v18m0-18 3 3m-3-3-3 3m-4 12-3 3m0 0-3-3m3 3V3"
    />
  </svg>
)
export default SvgArrowsDownUp
