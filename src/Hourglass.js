import * as React from 'react'
const SvgHourglass = (props) => (
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
      d="M6.5 7h11m-11 10h11M12 12a6 6 0 0 0-6 6v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a6 6 0 0 0-6-6m0 0a6 6 0 0 1-6-6V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a6 6 0 0 1-6 6"
    />
  </svg>
)
export default SvgHourglass
