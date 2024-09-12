import * as React from 'react'
const SvgBrandReddit = (props) => (
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
      d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zm0 0 1-5 6 1m-9 13q1 .5 2 .5t2-.5m4-13a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-8.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
)
export default SvgBrandReddit
