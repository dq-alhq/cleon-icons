import * as React from 'react'
const SvgGavel = (props) => (
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
      d="m13 10 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13m3-3L9 6m4 4 .5.5 2.293-2.293a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0L8.5 5.5 9 6m4 4-3 3m0 0L6 9m4 4 .5.5-2.293 2.293a1 1 0 0 1-1.414 0l-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5 6 9m0 0 3-3M3 21h7"
    />
  </svg>
)
export default SvgGavel
