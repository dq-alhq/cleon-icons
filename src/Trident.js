import * as React from 'react'
const SvgTrident = (props) => (
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
      d="m3 6 2-2v3a7 7 0 1 0 14 0V4l2 2m-9 15V3m0 0-2 2m2-2 2 2"
    />
  </svg>
)
export default SvgTrident
