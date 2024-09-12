import * as React from 'react'
const SvgTruck = (props) => (
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
      d="M5 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h2v-6m0 0h-8m8 0-3-5h-5"
    />
  </svg>
)
export default SvgTruck
