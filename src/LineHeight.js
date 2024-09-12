import * as React from 'react'
const SvgLineHeight = (props) => (
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
      d="m3 8 3-3m0 0 3 3M6 5v14m-3-3 3 3m0 0 3-3m4-10h7m-7 6h7m-7 6h7"
    />
  </svg>
)
export default SvgLineHeight
