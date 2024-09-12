import * as React from 'react'
const SvgDashboard = (props) => (
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
      d="M13.45 11.55 15.5 9.5M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-3.6 7a9 9 0 1 1 11.2 0z"
    />
  </svg>
)
export default SvgDashboard
