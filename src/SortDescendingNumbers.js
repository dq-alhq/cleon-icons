import * as React from 'react'
const SvgSortDescendingNumbers = (props) => (
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
      d="m4 15 3 3m0 0 3-3m-3 3V6m12-1a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0v3a2 2 0 0 1-2 2h-1.5m1.5 4a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-3a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgSortDescendingNumbers
