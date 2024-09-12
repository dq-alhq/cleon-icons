import * as React from 'react'
const SvgPlaylist = (props) => (
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
      d="M17 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0V4h4m-8 1H3m0 4h10m-4 4H3"
    />
  </svg>
)
export default SvgPlaylist
