import * as React from 'react'
const SvgBrandSlack = (props) => (
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
      d="M12 12V6m0 6h6m-6 0v6m0-6H6m6-6a2 2 0 1 1 4 0v6m-4-6a2 2 0 1 0-2 2m6 2a2 2 0 1 1 2 2m0 0a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2m0 0a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2m0 0a2 2 0 1 1 0-4h6"
    />
  </svg>
)
export default SvgBrandSlack
