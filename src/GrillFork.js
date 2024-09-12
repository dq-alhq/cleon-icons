import * as React from 'react'
const SvgGrillFork = (props) => (
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
      d="m5 5 11.5 11.5M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3m12.347 13.575 1.08 1.079a1.96 1.96 0 1 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772"
    />
  </svg>
)
export default SvgGrillFork
