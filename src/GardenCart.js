import * as React from 'react'
const SvgGardenCart = (props) => (
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
      d="M17.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 0L21 8H6v11a1 1 0 0 0 1.806.591L11.5 14.5v.055m6 .445-7.1-.747a4 4 0 0 1-3.296-2.493L4.251 4.63A1 1 0 0 0 3.323 4H2"
    />
  </svg>
)
export default SvgGardenCart
