import * as React from 'react'
const SvgGitCherryPick = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15a3 3 0 1 1 0-6m0 6a3 3 0 1 0 0-6m0 6v6M7 9V3m6 4h2.5l1.5 5m0 0-1.5 5H13m4-5h3" />
  </svg>
)
export default SvgGitCherryPick
