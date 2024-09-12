import * as React from 'react'
const SvgIconAnchor = (props) => (
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
      d="M12 9v12m0-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 12a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m1 0h-2M5 13H3"
    />
  </svg>
)
export default SvgIconAnchor
