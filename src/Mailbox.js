import * as React from 'react'
const SvgMailbox = (props) => (
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
      d="M10 21v-6.5A3.5 3.5 0 0 0 6.5 11m0 0A3.5 3.5 0 0 0 3 14.5V21h18v-6a4 4 0 0 0-4-4zm5.5 0V3h4l2 2-2 2h-4m-6 8h1"
    />
  </svg>
)
export default SvgMailbox
