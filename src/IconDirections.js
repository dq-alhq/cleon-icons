import * as React from 'react'
const SvgIconDirections = (props) => (
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
      d="M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2-2-2zm6 8v4H6l-2-2 2-2z"
    />
  </svg>
)
export default SvgIconDirections
