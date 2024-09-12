import * as React from 'react'
const SvgIconAxe = (props) => (
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
      d="m13 9 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 12m0 0 6-6-3-3-6 6-3.24 1.296a1.25 1.25 0 0 0-.42 2.044l3.32 3.32a1.25 1.25 0 0 0 2.044-.42z"
    />
  </svg>
)
export default SvgIconAxe
