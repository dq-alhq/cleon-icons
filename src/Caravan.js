import * as React from 'react'
const SvgCaravan = (props) => (
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
      d="M9 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h10l4 4v8m-6 0h8M6 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
    />
  </svg>
)
export default SvgCaravan
