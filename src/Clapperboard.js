import * as React from 'react'
const SvgClapperboard = (props) => (
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
      d="m3.876 11.042 15.407-4.479-.716-2.329c-.269-.896-1.254-1.433-2.24-1.165L4.234 6.653c-.896.268-1.433 1.254-1.165 2.24zm0 0H20v7.166A1.79 1.79 0 0 1 18.208 20H5.668a1.79 1.79 0 0 1-1.792-1.792zm2.866-5.106L9.52 9.43m2.777-5.196 2.777 3.583"
    />
  </svg>
)
export default SvgClapperboard
