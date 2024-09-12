import * as React from 'react'
const SvgStethoscope = (props) => (
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
      d="M6 4H5a2 2 0 0 0-2 2v3.5a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-9-9v2M6 3v2"
    />
  </svg>
)
export default SvgStethoscope
