import * as React from 'react'
const SvgSpy = (props) => (
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
      d="M3 11h18M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4m-9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h4m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
)
export default SvgSpy
