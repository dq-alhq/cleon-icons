import * as React from 'react'
const SvgCurrencyLitecoin = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 19H9.806a2 2 0 0 1-1.98-2.283L9.5 5M14 9l-9 4" />
  </svg>
)
export default SvgCurrencyLitecoin
