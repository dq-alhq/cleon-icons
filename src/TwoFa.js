import * as React from 'react'
const SvgTwoFa = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16H3l3.47-4.66A2 2 0 1 0 3 9.8m7 6.2V8h4m-4 4h3m4 4v-6a2 2 0 1 1 4 0v6m-4-3h4" />
  </svg>
)
export default SvgTwoFa
