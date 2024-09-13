import * as React from 'react'
const SvgCurrencyDogecoin = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h6M9 6v12m-3 0h6a6 6 0 1 0 0-12H6" />
  </svg>
)
export default SvgCurrencyDogecoin
