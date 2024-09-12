import * as React from 'react'
const SvgTools = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.5 5.5 4 4M12 8 7 3 3 7l5 5M7 8 5.5 9.5M16 12l5 5-4 4-5-5m4 1-1.5 1.5M3 21h4L20 8a2.829 2.829 0 0 0-4-4L3 17z"
    />
  </svg>
)
export default SvgTools
