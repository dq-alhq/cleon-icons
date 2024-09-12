import * as React from 'react'
const SvgZodiacTaurus = (props) => (
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
      d="M6 3a6 6 0 0 0 6 6m0 0a6 6 0 0 0 6-6m-6 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12"
    />
  </svg>
)
export default SvgZodiacTaurus
