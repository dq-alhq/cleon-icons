import * as React from 'react'
const SvgUsb = (props) => (
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
      d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V5.5M7 10v3l5 3m-5-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5 4.5 5-2V10m-1 0h2V8h-2zm-6-4.5h4L12 3z"
    />
  </svg>
)
export default SvgUsb
