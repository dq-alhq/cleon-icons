import * as React from 'react'
const SvgAudioTape = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M16.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 17V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10m18 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-4-3H7l-4 3m5-7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
)
export default SvgAudioTape
