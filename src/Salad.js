import * as React from 'react'
const SvgSalad = (props) => (
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
      d="M18.5 11c.351-1.017.426-2.236.5-3.714V6h-2.256c-2.83 0-4.616.804-5.64 2.076m-5.849 2.932A12 12 0 0 1 5 9V8h1.755c.98 0 1.801.124 2.479.35M8 8l1-4 4 2.5m0 4.5v-.5a2.5 2.5 0 0 0-5 0v.5m-4 0h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1"
    />
  </svg>
)
export default SvgSalad
