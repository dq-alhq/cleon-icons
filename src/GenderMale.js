import * as React from 'react'
const SvgGenderMale = (props) => (
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
      d="m19 5-5.4 5.4M19 5h-5m5 0v5M5 14a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
    />
  </svg>
)
export default SvgGenderMale
