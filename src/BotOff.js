import * as React from 'react'
const SvgBotOff = (props) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.67 8H18a2 2 0 0 1 2 2v4.33M2 14h2m16 0h2m0 8L2 2m6 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586M9 13v2m.67-11H12v2.33"
    />
  </svg>
)
export default SvgBotOff