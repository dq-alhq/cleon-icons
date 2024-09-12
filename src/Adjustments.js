import * as React from 'react'
const SvgAdjustments = (props) => (
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
      d="M6 4v4m0 4v8m6-16v10m0 4v2m6-16v1m0 4v11M4 8h4v4H4zm6 6h4v4h-4zm6-9h4v4h-4z"
    />
  </svg>
)
export default SvgAdjustments
