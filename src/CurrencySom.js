import * as React from 'react'
const SvgCurrencySom = (props) => (
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
      d="M10 18V6H5v10a2 2 0 0 1-2 2m15-6a3 3 0 0 1 0 6h-4V6h4a3 3 0 0 1 0 6m0 0h-4"
    />
  </svg>
)
export default SvgCurrencySom
