import * as React from 'react'
const SvgGlobe = (props) => (
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
      d="M5.75 15a8.017 8.017 0 0 0 13.109-4.447A8.01 8.01 0 0 0 15 2m-4 15v4m-4 0h8M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
    />
  </svg>
)
export default SvgGlobe
