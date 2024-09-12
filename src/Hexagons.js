import * as React from 'react'
const SvgHexagons = (props) => (
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
      d="m8 11-4 2v5l4 2 4-2m-4-7 4 2m-4-2V6l4-2 4 2v5m-4 2v5m0-5 4-2m-4 7 4 2 4-2v-5l-4-2"
    />
  </svg>
)
export default SvgHexagons
