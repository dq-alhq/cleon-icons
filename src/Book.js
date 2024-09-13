import * as React from 'react'
const SvgBook = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 18a2 2 0 0 0 2 2h12V4H7a2 2 0 0 0-2 2zm0 0a2 2 0 0 1 2-2h12" />
  </svg>
)
export default SvgBook
