import * as React from 'react'
const SvgTableOfContents = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H3m13 6H3M16 6H3m18 6h.01M21 18h.01M21 6h.01" />
  </svg>
)
export default SvgTableOfContents