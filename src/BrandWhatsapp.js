import * as React from 'react'
const SvgBrandWhatsapp = (props) => (
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
      d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 1 0-1 0zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"
    />
  </svg>
)
export default SvgBrandWhatsapp
