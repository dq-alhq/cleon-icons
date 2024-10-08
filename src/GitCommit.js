import * as React from 'react'
const SvgGitCommit = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 0 1 0-6m0 6a3 3 0 0 0 0-6m0 6v6m0-12V3" />
  </svg>
)
export default SvgGitCommit
