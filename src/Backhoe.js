import * as React from 'react'
const SvgBackhoe = (props) => (
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
      d="M4 19a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4h9m-9-4h9m0 4a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 0v-5m-5 2V7h2a3 3 0 0 1 3 3m0 0 5-5 3.12 4.88M5 15v-2a1 1 0 0 1 1-1h7m8.12-2.12A3 3 0 0 1 19 15a3 3 0 0 1-2.12-.88z"
    />
  </svg>
)
export default SvgBackhoe
