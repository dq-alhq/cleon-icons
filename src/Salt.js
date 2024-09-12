import * as React from 'react'
const SvgSalt = (props) => (
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
      d="M12 13v.01M10 16v.01m4-.01v.01M7.5 8h9m-9 0 .28-2.248A2 2 0 0 1 9.766 4h4.468a2 2 0 0 1 1.985 1.752L16.5 8m-9 0-1.612 9.671A2 2 0 0 0 7.861 20h8.278a2 2 0 0 0 1.973-2.329L16.5 8"
    />
  </svg>
)
export default SvgSalt
