import * as React from 'react'
const SvgArrowsMoveHorizontal = (props) => (
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
      d="m18 9 3 3m0 0-3 3m3-3h-6M6 9l-3 3m0 0 3 3m-3-3h6"
    />
  </svg>
)
export default SvgArrowsMoveHorizontal
