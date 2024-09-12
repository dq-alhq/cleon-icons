import * as React from 'react'
const SvgBus = (props) => (
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
      d="M4 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H2V6a1 1 0 0 1 1-1h14c1.326 0 2.598.737 3.535 2.05S22 10.143 22 12M8 17h8m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h2v-5m0 0h-4.5L16 5M2 10h15M7 5v5m5-5v5"
    />
  </svg>
)
export default SvgBus
