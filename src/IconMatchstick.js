import * as React from 'react'
const SvgIconMatchstick = (props) => (
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
      d="m3 21 14-9m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-9 3.62 7.29a4.01 4.01 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z"
    />
  </svg>
)
export default SvgIconMatchstick
