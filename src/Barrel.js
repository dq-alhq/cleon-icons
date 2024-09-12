import * as React from 'react'
const SvgBarrel = (props) => (
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
      d="M14 4q1 4 1 8t-1 8M10 4q-1 4-1 8t1 8m-5.5-4h15m0-8h-15m2.778-4h9.444a2 2 0 0 1 1.841 1.22Q20 8.61 20 12t-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12t1.437-6.78A2 2 0 0 1 7.278 4"
    />
  </svg>
)
export default SvgBarrel
