import * as React from 'react'
const SvgRubberStamp = (props) => (
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
      d="M5 21h14m2-3.15H3c0-4.05 1.421-4.05 3.79-4.05C12 13.8 8 9.21 8 7a4 4 0 0 1 8 0c0 2.21-4 6.8 1.21 6.8 2.369 0 3.79 0 3.79 4.05"
    />
  </svg>
)
export default SvgRubberStamp
