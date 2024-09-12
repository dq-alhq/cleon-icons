import * as React from 'react'
const SvgMist = (props) => (
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
      d="M5 5h3m4 0h9M3 10h11m4 0h1M5 15h5m4 0h7M3 20h9m4 0h3"
    />
  </svg>
)
export default SvgMist
