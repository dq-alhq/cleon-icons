import * as React from 'react'
const SvgFlask = (props) => (
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
      d="M9 3h6m-5 6h4m-4 0V3m0 6L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1L14 9m0 0V3"
    />
  </svg>
)
export default SvgFlask
