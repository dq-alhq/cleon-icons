import * as React from 'react'
const SvgZodiacPisces = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3a21 21 0 0 1 0 18M19 3a21 21 0 0 0 0 18M5 12h14" />
  </svg>
)
export default SvgZodiacPisces
