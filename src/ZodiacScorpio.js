import * as React from 'react'
const SvgZodiacScorpio = (props) => (
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
      d="M3 4a2 2 0 0 1 2 2m0 0v9m0-9a2 2 0 1 1 4 0m0 0v9m0-9a2 2 0 1 1 4 0v10a3 3 0 0 0 3 3h5m0 0-3-3m3 3-3 3"
    />
  </svg>
)
export default SvgZodiacScorpio
