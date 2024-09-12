import * as React from 'react'
const SvgHandStop = (props) => (
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
      d="M11 5.5a1.5 1.5 0 1 0-3 0V13l-1.47-1.47a1.87 1.87 0 0 0-2.28-.28 1.5 1.5 0 0 0-.536 2.022Q6.532 18.282 7 19l.196.3a6 6 0 0 0 5.012 2.7H12h2a6 6 0 0 0 6-6V7.5a1.5 1.5 0 1 0-3 0m-6-2V12m0-6.5v-2a1.5 1.5 0 1 1 3 0V12m0-6.5a1.5 1.5 0 1 1 3 0V12"
    />
  </svg>
)
export default SvgHandStop
