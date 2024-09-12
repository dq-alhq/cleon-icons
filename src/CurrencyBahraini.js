import * as React from 'react'
const SvgCurrencyBahraini = (props) => (
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
      d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3m-4 9.01V19m7-3.99V15m3 0h2a2 2 0 0 0 1.649-3.131L17.996 8"
    />
  </svg>
)
export default SvgCurrencyBahraini
