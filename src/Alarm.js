import * as React from 'react'
const SvgAlarm = (props) => (
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
      d="M12 10v3h2M7 4 4.25 6M17 4l2.75 2M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0"
    />
  </svg>
)
export default SvgAlarm
