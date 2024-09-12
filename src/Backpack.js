import * as React from 'react'
const SvgBackpack = (props) => (
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
      d="M10 6V5a2 2 0 1 1 4 0v1M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4m-4-11h2m-8 8v-6a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3"
    />
  </svg>
)
export default SvgBackpack
