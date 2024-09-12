import * as React from 'react'
const SvgTimeline = (props) => (
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
      d="m4 16 6-7 5 5 5-6m-6 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-6 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m16-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgTimeline
