import * as React from 'react'
const SvgSpeedboat = (props) => (
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
      d="m6 13 1.5-5M6 8h8l2 3M3 17h13.4a3 3 0 0 0 2.5-1.34L22 11h-6.23a4 4 0 0 0-1.49.29l-3.56 1.42a4 4 0 0 1-1.49.29H4.5z"
    />
  </svg>
)
export default SvgSpeedboat
