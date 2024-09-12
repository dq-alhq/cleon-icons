import * as React from 'react'
const SvgCirclePlus = (props) => (
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
      d="M9.172 12h5.656M12 9.172v5.656m-6.364 3.536A9 9 0 1 0 18.364 5.635 9 9 0 0 0 5.636 18.364"
    />
  </svg>
)
export default SvgCirclePlus
