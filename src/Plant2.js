import * as React from 'react'
const SvgPlant2 = (props) => (
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
      d="M12 19A10 10 0 0 1 2 9a10 10 0 0 1 10 10m0 0A10 10 0 0 0 22 9a10 10 0 0 0-10 10m2.99-7.5A9.7 9.7 0 0 0 12 4a9.7 9.7 0 0 0-2.99 7.5"
    />
  </svg>
)
export default SvgPlant2
