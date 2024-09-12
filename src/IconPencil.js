import * as React from 'react'
const SvgIconPencil = (props) => (
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
      d="m13.5 6.5 4 4M4 20h4L18.5 9.5a2.829 2.829 0 0 0-4-4L4 16z"
    />
  </svg>
)
export default SvgIconPencil
