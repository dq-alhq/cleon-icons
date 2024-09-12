import * as React from 'react'
const SvgArrowsCross = (props) => (
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
      d="M16 4h4m0 0v4m0-4-5 5M4 20l5-5m7 5h4m0 0v-4m0 4L4 4"
    />
  </svg>
)
export default SvgArrowsCross
