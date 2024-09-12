import * as React from 'react'
const SvgRuler = (props) => (
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
      d="m16 7-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M17 3l4 4L7 21l-4-4z"
    />
  </svg>
)
export default SvgRuler
