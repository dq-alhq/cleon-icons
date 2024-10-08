import * as React from 'react'
const SvgDiscount = (props) => (
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
      d="m9 15 6-6m-5 .5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12"
    />
  </svg>
)
export default SvgDiscount
