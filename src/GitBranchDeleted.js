import * as React from 'react'
const SvgGitBranchDeleted = (props) => (
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
      d="M9 18a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h6a2 2 0 0 0 2-2v-5M7 16V8m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m10 3-3 3m3-3 3 3M15 4l4 4m-4 0 4-4"
    />
  </svg>
)
export default SvgGitBranchDeleted
