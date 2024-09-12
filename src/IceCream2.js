import * as React from 'react'
const SvgIceCream2 = (props) => (
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
      d="M17.657 11a6 6 0 1 0-11.315 0m11.315 0L12 22 6.342 11m11.315 0H6.342"
    />
  </svg>
)
export default SvgIceCream2
