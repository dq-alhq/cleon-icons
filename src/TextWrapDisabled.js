import * as React from 'react'
const SvgTextWrapDisabled = (props) => (
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
      d="M4 6h10M4 18h10M4 12h17m0 0-3-3m3 3-3 3"
    />
  </svg>
)
export default SvgTextWrapDisabled