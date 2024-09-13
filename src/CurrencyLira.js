import * as React from 'react'
const SvgCurrencyLira = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4m0-4-8 4" />
  </svg>
)
export default SvgCurrencyLira
