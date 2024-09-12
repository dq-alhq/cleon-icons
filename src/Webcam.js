import * as React from 'react'
const SvgWebcam = (props) => (
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
      d="m8 16-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M5 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0m4 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
)
export default SvgWebcam
