import * as React from 'react'
const SvgCarrot = (props) => (
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
      d="m9 13-1.5-1.5M16 14l-2-2m2-4s1.594-2 3-2c1.86 0 3 2 3 2s-1.14 2-3 2-3-2-3-2m0 0s-2-1.14-2-3 2-3 2-3 2 1.14 2 3c0 1.423-2 3-2 3M3 21s9.834-3.489 12.684-6.34a4.487 4.487 0 0 0-4.887-7.317 4.5 4.5 0 0 0-1.455.973c-2.86 2.861-6.347 12.689-6.347 12.689z"
    />
  </svg>
)
export default SvgCarrot
