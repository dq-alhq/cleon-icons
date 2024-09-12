import * as React from 'react'
const SvgBrightness = (props) => (
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
      d="M12 21a9 9 0 0 1 0-18m0 18a9 9 0 0 0 0-18m0 18V3m0 6 4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85"
    />
  </svg>
)
export default SvgBrightness
