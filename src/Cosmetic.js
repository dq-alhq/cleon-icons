import * as React from 'react'
const SvgCosmetic = (props) => (
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
      d="M16.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0 0v4m0 0H13m3.5 0H20M3 11H2v6.5A2.5 2.5 0 0 0 4.5 20h1A2.5 2.5 0 0 0 8 17.5V11H7m-4 0V6l4-2v7m-4 0h4"
    />
  </svg>
)
export default SvgCosmetic
