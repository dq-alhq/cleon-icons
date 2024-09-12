import * as React from 'react'
const SvgAlertTriangle = (props) => (
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
      d="M12 9v4m0 4h.01M10.24 3.957l-8.422 14.06A1.99 1.99 0 0 0 3.518 21h16.845a1.99 1.99 0 0 0 1.7-2.983L13.64 3.957a1.99 1.99 0 0 0-3.4 0"
    />
  </svg>
)
export default SvgAlertTriangle
