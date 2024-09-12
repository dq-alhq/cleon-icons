import * as React from 'react'
const SvgBrandAlgolia = (props) => (
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
      d="M15.5 11c-.414-1.477-1.886-2.5-3.5-2.5A3.47 3.47 0 0 0 8.5 12a3.47 3.47 0 0 0 3.5 3.5c.974 0 1.861-.357 2.5-1L19 19V4h-7c-4.386 0-8 3.582-8 8s3.614 8 8 8a7.6 7.6 0 0 0 2.998-.614"
    />
  </svg>
)
export default SvgBrandAlgolia
