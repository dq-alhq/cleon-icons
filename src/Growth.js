import * as React from 'react'
const SvgGrowth = (props) => (
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
      d="M16.5 15a4.5 4.5 0 0 0-4.5 4.5c0-2.485-1.79-4.5-4-4.5m8.5-4a4.5 4.5 0 0 0-4.5 4.5c0-2.485-1.79-4.5-4-4.5m8.5-4a4.5 4.5 0 0 0-4.5 4.5C12 9.015 10.21 7 8 7m4-3v6"
    />
  </svg>
)
export default SvgGrowth
