import * as React from 'react'
const SvgCoinRupee = (props) => (
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
      d="M15 8H9h1a3 3 0 0 1 0 6H9l3 3m-3-6h6M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12"
    />
  </svg>
)
export default SvgCoinRupee
