import * as React from 'react'
const SvgCone = (props) => (
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
      d="M19 17c0-1.657-3.134-3-7-3s-7 1.343-7 3m14 0c0 1.657-3.134 3-7 3s-7-1.343-7-3m14 0v-.5L12 4 5 16.5v.5"
    />
  </svg>
)
export default SvgCone
