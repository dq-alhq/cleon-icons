import * as React from 'react'
const SvgCurrencyKip = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12M9 5v14m7 0a7 7 0 0 0-7-7 7 7 0 0 0 7-7" />
  </svg>
)
export default SvgCurrencyKip
