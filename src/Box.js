import * as React from 'react'
const SvgBox = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7.5 12 3 4 7.5m16 0v9L12 21m8-13.5L12 12m0 9-8-4.5v-9M12 21v-9M4 7.5l8 4.5" />
  </svg>
)
export default SvgBox
