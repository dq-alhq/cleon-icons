import * as React from 'react'
const SvgBluetoothConnected = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7 10 10-5 5V2l5 5L7 17m11-5h3M3 12h3" />
  </svg>
)
export default SvgBluetoothConnected