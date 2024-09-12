import * as React from 'react'
const SvgCylinder = (props) => (
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
      d="M7 6c0 .796.527 1.559 1.464 2.121C9.402 8.684 10.674 9 12 9s2.598-.316 3.536-.879C16.473 7.56 17 6.796 17 6M7 6c0-.796.527-1.559 1.464-2.121C9.402 3.316 10.674 3 12 3s2.598.316 3.536.879C16.473 4.44 17 5.204 17 6M7 6v12c0 1.657 2.239 3 5 3s5-1.343 5-3V6"
    />
  </svg>
)
export default SvgCylinder
