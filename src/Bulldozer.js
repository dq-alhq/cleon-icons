import * as React from 'react'
const SvgBulldozer = (props) => (
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
      d="M4 19a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4h9m-9-4h9m0 4a2 2 0 0 1 0-4m0 4a2 2 0 0 0 2-2m0 0a2 2 0 0 0-2-2m2 2h3m-5-2v-5a3 3 0 0 0-3-3H8v5m10 1v6h3M5 15v-2a1 1 0 0 1 1-1h7"
    />
  </svg>
)
export default SvgBulldozer
