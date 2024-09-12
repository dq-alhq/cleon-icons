import * as React from 'react'
const SvgGripVertical = (props) => (
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
      d="M8 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgGripVertical
