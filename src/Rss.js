import * as React from 'react'
const SvgRss = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9m-9-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgRss