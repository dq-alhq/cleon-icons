import * as React from 'react'
const SvgTank = (props) => (
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
      d="m6 12 1-5h5l3 5m6-3h-7.8M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3"
    />
  </svg>
)
export default SvgTank
