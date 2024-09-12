import * as React from 'react'
const SvgHelicopter = (props) => (
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
      d="m3 10 1 2h6m3-3V6M5 6h15m-5 3.1V13h5.5M15 19v-3m4 3h-8m1-10a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2c0-3.31-3.13-5-7-5z"
    />
  </svg>
)
export default SvgHelicopter
