import * as React from 'react'
const SvgRotateBox = (props) => (
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
      d="M12 3a7 7 0 0 1 7 7v4m0 0-3-3m3 3 3-3M3 12.5l5 3V21m-5-8.5 5-3 5 3V18l-5 3m-5-8.5V18l5 3m0-5.455 5-3.03"
    />
  </svg>
)
export default SvgRotateBox
