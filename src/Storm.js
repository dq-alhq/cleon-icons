import * as React from 'react'
const SvgStorm = (props) => (
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
      d="M5.369 14.236C3.53 10.307 3.808 6.62 4.665 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-4 0a7 7 0 1 0 14 0 7 7 0 0 0-14 0"
    />
  </svg>
)
export default SvgStorm
