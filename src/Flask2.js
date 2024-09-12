import * as React from 'react'
const SvgFlask2 = (props) => (
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
      d="M6.1 15h11.8M9 3h6m-1 0v7.342A6 6 0 0 1 15.318 21H8.683A6 6 0 0 1 10 10.34V3z"
    />
  </svg>
)
export default SvgFlask2
