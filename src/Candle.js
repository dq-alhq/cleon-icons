import * as React from 'react'
const SvgCandle = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21h6v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM12 3l1.465 1.638a2 2 0 1 1-3.015.099z" />
  </svg>
)
export default SvgCandle
