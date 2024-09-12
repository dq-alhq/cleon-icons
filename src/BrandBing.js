import * as React from 'react'
const SvgBrandBing = (props) => (
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
      d="M5 3v16l3.72 2L18 15.82v-4.09L9.77 8.95l1.61 3.89L13.94 14 8.7 16.92V4.27z"
    />
  </svg>
)
export default SvgBrandBing
