import * as React from 'react'
const SvgSchema = (props) => (
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
      d="M10 12h5M7.5 6v4m0 4v4M5 2h5v4H5zm10 8h5v4h-5zM5 18h5v4H5zm0-8h5v4H5z"
    />
  </svg>
)
export default SvgSchema
