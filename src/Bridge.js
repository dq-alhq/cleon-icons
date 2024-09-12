import * as React from 'react'
const SvgBridge = (props) => (
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
      d="M6 5v14M18 5v14M2 15h20M3 8a7.5 7.5 0 0 0 3-2 6.5 6.5 0 0 0 6 4m0 0a6.5 6.5 0 0 0 6-4 7.5 7.5 0 0 0 3 2m-9 2v5"
    />
  </svg>
)
export default SvgBridge
