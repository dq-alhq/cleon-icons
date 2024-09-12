import * as React from 'react'
const SvgMoneybag = (props) => (
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
      d="M9.5 3h5A1.5 1.5 0 0 1 16 4.5 3.5 3.5 0 0 1 12.5 8h-1A3.5 3.5 0 0 1 8 4.5 1.5 1.5 0 0 1 9.5 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 17v-1a8 8 0 0 1 16 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4"
    />
  </svg>
)
export default SvgMoneybag
