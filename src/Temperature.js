import * as React from 'react'
const SvgTemperature = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9h4m-4 4.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0z" />
  </svg>
)
export default SvgTemperature
