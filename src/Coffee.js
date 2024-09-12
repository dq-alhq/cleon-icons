import * as React from 'react'
const SvgCoffee = (props) => (
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
      d="M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4-4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4.746 9.726a3 3 0 1 0 .252-5.555M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z"
    />
  </svg>
)
export default SvgCoffee
