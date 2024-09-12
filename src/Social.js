import * as React from 'react'
const SvgSocial = (props) => (
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
      d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v4m0 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-5.3 6.8 2.8-2m7.8 2-2.8-2M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgSocial
