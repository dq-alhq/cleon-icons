import * as React from 'react'
const SvgLetterSpacing = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12V6.5a2.5 2.5 0 1 1 5 0V12m0-4H5m8-4 3 8 3-8M5 18h14M5 18l2-2m-2 2 2 2m12-2-2 2m2-2-2-2" />
  </svg>
)
export default SvgLetterSpacing
