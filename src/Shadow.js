import * as React from 'react'
const SvgShadow = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 12h5m-5 3h4m-4 3h1m-1-9h4m-4-3h1M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
  </svg>
)
export default SvgShadow
