import * as React from 'react'
const SvgWindmill = (props) => (
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
      d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12z"
    />
  </svg>
)
export default SvgWindmill
