import * as React from 'react'
const SvgIconDiamond = (props) => (
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
      d="M10 12 8 9.8l.6-1M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10z"
    />
  </svg>
)
export default SvgIconDiamond
