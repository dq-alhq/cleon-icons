import * as React from 'react'
const SvgTexture = (props) => (
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
      d="M6 3 3 6m18 12-3 3M11 3l-8 8m13-8L3 16M21 3 3 21M21 8 8 21m13-8-8 8"
    />
  </svg>
)
export default SvgTexture
