import * as React from 'react'
const SvgCurrencyRupee = (props) => (
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
      d="M18 5H7h3a4 4 0 1 1 0 8H7l6 6M7 9h11"
    />
  </svg>
)
export default SvgCurrencyRupee
