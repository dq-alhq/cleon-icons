import * as React from 'react'
const SvgCurrencyLari = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13a6 6 0 1 0-6 6m-6 0h12M10 5v7m4 0V5" />
  </svg>
)
export default SvgCurrencyLari
