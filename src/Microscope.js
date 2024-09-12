import * as React from 'react'
const SvgMicroscope = (props) => (
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
      d="M5 21h14M6 18h2m-1 0v3m3.5-8.5L9 14m8-11 3 3m-8 15a6 6 0 0 0 3.715-10.712M9 11l3 3 6-6-3-3z"
    />
  </svg>
)
export default SvgMicroscope
