import * as React from 'react'
const SvgCurrencyQuetzal = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m13 13 5 5M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0" />
  </svg>
)
export default SvgCurrencyQuetzal
