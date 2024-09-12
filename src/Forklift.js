import * as React from 'react'
const SvgForklift = (props) => (
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
      d="M3 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0v-6h13m-9 6h5m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0v-6m0 0-3-6H9v6m-4 0V7h4m13 8h-3V5m-3 8h3"
    />
  </svg>
)
export default SvgForklift
