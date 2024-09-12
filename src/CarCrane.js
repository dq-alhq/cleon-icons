import * as React from 'react'
const SvgCarCrane = (props) => (
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
      d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0v-5h9m-5 6h8m4 0h2v-6m0 0a5 5 0 0 0-5-5h-1m6 5h-4.5L15 7m0 0h-3v11m-8-6V6m0 0 18-3v2M4 6l4 2v4m7 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgCarCrane
