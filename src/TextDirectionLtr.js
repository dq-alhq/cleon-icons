import * as React from 'react'
const SvgTextDirectionLtr = (props) => (
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
      d="M5 19h14m0 0-2 2m2-2-2-2M16 4H9.5a3.5 3.5 0 1 0 0 7h.5m4 4V4m-4 11V4"
    />
  </svg>
)
export default SvgTextDirectionLtr