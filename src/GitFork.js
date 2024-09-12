import * as React from 'react'
const SvgGitFork = (props) => (
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
      d="M12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0v-4M7 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
    />
  </svg>
)
export default SvgGitFork
