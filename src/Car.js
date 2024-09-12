import * as React from 'react'
const SvgCar = (props) => (
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
      d="M5 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3v-6m6 6h6m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h2v-4a2 2 0 0 0-2-2h-1M3 11l2-5h9l4 5M3 11h15m-6 0V6"
    />
  </svg>
)
export default SvgCar
