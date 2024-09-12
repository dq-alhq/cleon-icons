import * as React from 'react'
const SvgBrandCpp = (props) => (
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
      d="M18 12h4m-2-2v4m-9-2h4m-2-2v4M9 9a3 3 0 0 0-3-3h-.5A3.5 3.5 0 0 0 2 9.5v5A3.5 3.5 0 0 0 5.5 18H6a3 3 0 0 0 3-3"
    />
  </svg>
)
export default SvgBrandCpp
