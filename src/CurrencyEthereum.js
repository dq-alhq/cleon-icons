import * as React from 'react'
const SvgCurrencyEthereum = (props) => (
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
      d="m6 12 6-9 6 9M6 12l6 9 6-9M6 12l6-3 6 3M6 12l6 2 6-2"
    />
  </svg>
)
export default SvgCurrencyEthereum
