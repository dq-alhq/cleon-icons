import * as React from 'react'
const SvgGauge = (props) => (
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
      d="M13.41 10.59 16 8m-9 4a5 5 0 0 1 5-5m-9 5a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12m8 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgGauge
