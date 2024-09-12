import * as React from 'react'
const SvgVaccine = (props) => (
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
      d="m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1L10 18H6m0 0v-4l6.5-6.5M6 18l-3 3"
    />
  </svg>
)
export default SvgVaccine
