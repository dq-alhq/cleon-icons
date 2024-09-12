import * as React from 'react'
const SvgEarth = (props) => (
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
      d="M12 21a9 9 0 0 0 9-9m-9 9a9 9 0 0 1-9-9m9 9c1.988 0 3.6-4.03 3.6-9S13.988 3 12 3m0 18c-1.988 0-3.6-4.03-3.6-9s1.612-9 3.6-9m9 9a9 9 0 0 0-9-9m9 9H3m9-9a9 9 0 0 0-9 9m2.636-6.236A8.97 8.97 0 0 0 12 8.4a8.97 8.97 0 0 0 6.364-2.636m0 12.472A8.97 8.97 0 0 0 12 15.6a8.97 8.97 0 0 0-6.364 2.636"
    />
  </svg>
)
export default SvgEarth
