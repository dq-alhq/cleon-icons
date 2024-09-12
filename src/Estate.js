import * as React from 'react'
const SvgEstate = (props) => (
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
      d="M3 21h18m-2 0v-4m0 0a2 2 0 0 0 2-2v-2a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2m-5 4V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14m5-4v4m-1-8h2M8 9h2"
    />
  </svg>
)
export default SvgEstate
