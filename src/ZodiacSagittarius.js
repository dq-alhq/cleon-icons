import * as React from 'react'
const SvgZodiacSagittarius = (props) => (
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
      d="M4 20 20 4m0 0h-7m7 0v7M6.5 12.5l5 5"
    />
  </svg>
)
export default SvgZodiacSagittarius
