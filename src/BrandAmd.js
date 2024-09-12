import * as React from 'react'
const SvgBrandAmd = (props) => (
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
      fill="currentColor"
      d="m22 22-5.561-5.557V7.557H7.55L2 2h20zM7.55 16.443V8.445L2 14.001V22h7.994l5.556-5.557z"
    />
  </svg>
)
export default SvgBrandAmd
