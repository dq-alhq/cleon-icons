import * as React from 'react'
const SvgJewishStar = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 2 3 5h6l-3 5 3 5h-6l-3 5-3-5H3l3-5-3-5h6z" />
  </svg>
)
export default SvgJewishStar
