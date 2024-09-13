import * as React from 'react'
const SvgEditCircle = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 5 3 3M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6M12 15l8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3z" />
  </svg>
)
export default SvgEditCircle
