import * as React from 'react'
const SvgIconSofa = (props) => (
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
      d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 0 1 2-2M4 11a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3m-8-6v9"
    />
  </svg>
)
export default SvgIconSofa
