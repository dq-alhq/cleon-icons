import * as React from 'react'
const SvgGitMerge = (props) => (
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
      d="M7 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V8m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0a4 4 0 0 0 4 4h4m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
)
export default SvgGitMerge