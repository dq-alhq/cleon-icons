import * as React from 'react'
const SvgCurrencyDinar = (props) => (
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
      d="M14 20.01V20m-8-7 2.386-.9a1 1 0 0 0-.095-1.902l-1.514-.404a1 1 0 0 1-.102-1.9L9 7m-6 7v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983-3.32L12 4m4 13 1 1h2a2 2 0 0 0 1.649-3.131L17.996 11"
    />
  </svg>
)
export default SvgCurrencyDinar
