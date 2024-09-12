import * as React from 'react'
const SvgMarquee = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 0 1 2-2m3 0h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m0 3a2 2 0 0 1-2 2m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9"
    />
  </svg>
)
export default SvgMarquee
