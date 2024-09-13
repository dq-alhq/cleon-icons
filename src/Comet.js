import * as React from 'react'
const SvgComet = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 4 7 7M9 4l3.5 3.5M4 9l3.5 3.5m8 6-3 1.5.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z" />
  </svg>
)
export default SvgComet
