import * as React from 'react'
const SvgLetterUppercase = (props) => (
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
      d="m3 16 4-8 4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V8h4a2 2 0 0 1 0 4"
    />
  </svg>
)
export default SvgLetterUppercase
