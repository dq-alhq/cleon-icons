import * as React from 'react'
const SvgWreckingBall = (props) => (
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
      d="M19 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V4l-6 7m-9 8a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4h9m-9-4h9m0 4a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 0v-5a3 3 0 0 0-3-3H8v5m-3 3v-2a1 1 0 0 1 1-1h7"
    />
  </svg>
)
export default SvgWreckingBall
