import * as React from 'react'
const SvgLighter = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 4 1.465 1.638a2 2 0 1 1-3.015.099z" />
  </svg>
)
export default SvgLighter
