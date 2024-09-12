import * as React from 'react'
const SvgIconGhost = (props) => (
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
      d="M10 9h.01M14 9h.01M12 3a7 7 0 0 1 7 7v1h1a2 2 0 0 1 0 4h-1v3l2 3H11a6 6 0 0 1-6-5.775v-.226H4a2 2 0 1 1 0-4h1v-1A7 7 0 0 1 12 3m-1 11h2a1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgIconGhost
