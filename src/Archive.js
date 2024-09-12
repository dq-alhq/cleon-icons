import * as React from 'react'
const SvgArchive = (props) => (
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
      d="M19 8a2 2 0 0 0 0-4H5a2 2 0 1 0 0 4m14 0H5m14 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8m5 4h4"
    />
  </svg>
)
export default SvgArchive
