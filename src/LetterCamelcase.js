import * as React from 'react'
const SvgLetterCamelcase = (props) => (
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
      d="M14 12h4.5a2 2 0 0 1 0 4H14V8h4a2 2 0 0 1 0 4m-9-2v6m0-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgLetterCamelcase
