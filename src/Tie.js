import * as React from 'react'
const SvgTie = (props) => (
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
      d="M13.5 7 16 18l-4 4-4-4 2.5-11m3 0 .993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7m3 0h-3m3 0 5 5.5"
    />
  </svg>
)
export default SvgTie
