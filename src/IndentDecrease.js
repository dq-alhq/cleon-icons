import * as React from 'react'
const SvgIndentDecrease = (props) => (
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
      d="M20 6h-7m7 6h-9m9 6h-7M8 8l-4 4 4 4"
    />
  </svg>
)
export default SvgIndentDecrease