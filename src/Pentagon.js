import * as React from 'react'
const SvgPentagon = (props) => (
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
      d="m13.2 3.394 7.033 5.237a2 2 0 0 1 .7 2.247l-2.973 8.764A2 2 0 0 1 16.066 21h-8.12a2 2 0 0 1-1.9-1.373L3.15 10.862a2 2 0 0 1 .696-2.225L10.804 3.4a2 2 0 0 1 2.397 0z"
    />
  </svg>
)
export default SvgPentagon