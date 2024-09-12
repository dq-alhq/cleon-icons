import * as React from 'react'
const SvgWallet = (props) => (
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
      d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12a1 1 0 0 1 1 1v3M4 6v12a2 2 0 0 0 2 2h12a1 1 0 0 0 1-1v-3m1-4v4h-4a2 2 0 0 1 0-4z"
    />
  </svg>
)
export default SvgWallet
