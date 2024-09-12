import * as React from 'react'
const SvgCottage = (props) => (
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
      d="M3 21h18M4 21V10l2.5-4.5L12 3l5.5 2.5L20 10v11M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgCottage
