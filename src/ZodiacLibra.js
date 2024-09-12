import * as React from 'react'
const SvgZodiacLibra = (props) => (
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
      d="M5 20h14M5 17h5v-.3a7 7 0 1 1 4 0v.3h5"
    />
  </svg>
)
export default SvgZodiacLibra
