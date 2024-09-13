import * as React from 'react'
const SvgTypographyOff = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h3m7 0h6M6.9 15h6.9m-.8-2 3 7M5 20 9.09 9.094m1.091-2.911L11 4h2l3.904 8.924M3 3l18 18" />
  </svg>
)
export default SvgTypographyOff
