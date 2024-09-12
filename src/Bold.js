import * as React from 'react'
const SvgBold = (props) => (
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
      d="M13 12a3.5 3.5 0 1 0 0-7H7v7m6 0H7m6 0h1a3.5 3.5 0 1 1 0 7H7v-7"
    />
  </svg>
)
export default SvgBold
