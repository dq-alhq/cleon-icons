import * as React from 'react'
const SvgAt = (props) => (
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
      d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0v1.5a2.5 2.5 0 1 0 5 0V12a9 9 0 1 0-5.5 8.28"
    />
  </svg>
)
export default SvgAt
