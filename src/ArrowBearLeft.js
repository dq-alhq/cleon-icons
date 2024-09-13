import * as React from 'react'
const SvgArrowBearLeft = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3H8m0 0v5m0-5 7.536 7.536A5 5 0 0 1 17 14.07V21" />
  </svg>
)
export default SvgArrowBearLeft
