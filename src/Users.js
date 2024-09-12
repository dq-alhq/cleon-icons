import * as React from 'react'
const SvgUsers = (props) => (
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
      d="M11 13a5 5 0 0 0 3.125-8.903M11 13a5 5 0 1 1 3.125-8.903M11 13a8 8 0 0 1 8 8H3a8 8 0 0 1 8-8m7.746 6H21.5a6.75 6.75 0 0 0-1.904-4.714A6.42 6.42 0 0 0 15 12.333c2.244 0 4.063-1.865 4.063-4.166S17.243 4 15 4q-.451 0-.875.097"
    />
  </svg>
)
export default SvgUsers
