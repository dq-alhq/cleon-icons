import * as React from 'react'
const SvgMailOpened = (props) => (
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
      d="m3 9 9 6 9-6M3 9l9-6 9 6M3 9v10M21 9v10m0 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-6-6M3 19l6-6"
    />
  </svg>
)
export default SvgMailOpened
