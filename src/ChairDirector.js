import * as React from 'react'
const SvgChairDirector = (props) => (
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
      d="m6 21 12-9V3m0 18L6 12V3m-1 9h14M6 8h12M6 5h12"
    />
  </svg>
)
export default SvgChairDirector
