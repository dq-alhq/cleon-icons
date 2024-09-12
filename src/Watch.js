import * as React from 'react'
const SvgWatch = (props) => (
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
      d="M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3M9 6h6M9 6V3h6v3m0 0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m0 0H9m6 0v3H9v-3"
    />
  </svg>
)
export default SvgWatch
