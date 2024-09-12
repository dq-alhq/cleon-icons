import * as React from 'react'
const SvgPizza = (props) => (
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
      d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634 14.94 14.94 0 0 0 6.502-1.479M13 11.01V11m-2 3v-.01m1 7.51c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.1 19.1 0 0 1 12 21.5"
    />
  </svg>
)
export default SvgPizza
