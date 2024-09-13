import * as React from 'react'
const SvgTrain = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15h16a2 2 0 0 0 2-2c0-3.87-3.37-7-10-7H3v5h17.5M3 10v4m5-3V6m5 5V6.5M3 19h18" />
  </svg>
)
export default SvgTrain
