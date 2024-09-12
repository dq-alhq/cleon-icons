import * as React from 'react'
const SvgIconBoxModel = (props) => (
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
      d="M8 8h8M8 8v8m0-8L4.7 4.7M16 8v8m0-8 3.3-3.3M16 16H8m8 0 3.3 3.3M8 16l-3.3 3.3M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
    />
  </svg>
)
export default SvgIconBoxModel
