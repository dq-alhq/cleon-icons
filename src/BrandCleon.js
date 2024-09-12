import * as React from 'react'
const SvgBrandCleon = (props) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zm.063 12.535a1.75 1.75 0 0 1-.64-2.39l3.25-5.63a1.75 1.75 0 0 1 3.03 1.75l-3.25 5.63a1.75 1.75 0 0 1-2.39.64M6.6 18.45a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m10.8 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m-7.025-2.366a1.75 1.75 0 0 0 3.031 1.75l2.75-4.763a1.75 1.75 0 0 0-3.031-1.75z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandCleon
