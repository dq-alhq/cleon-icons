import * as React from 'react'
const SvgMicrophone2 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12.9A4.999 4.999 0 1 0 11.098 9M15 12.9 11.098 9l-7.513 8.585a2 2 0 0 0 2.827 2.83z" />
  </svg>
)
export default SvgMicrophone2
