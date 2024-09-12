import * as React from 'react'
const SvgTex = (props) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 8V7H3v1m3 7V7m15 8-5-8m0 8 5-8m-7 4h-4v8h4m-4-4h3"
    />
  </svg>
)
export default SvgTex
