import * as React from 'react'
const SvgCalendarTime = (props) => (
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
      d="M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H3m12-8v2M7 3v2m11 11.496V18l1 1m-5-1a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
    />
  </svg>
)
export default SvgCalendarTime