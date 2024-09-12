import * as React from 'react'
const SvgCheese = (props) => (
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
      d="M21 9v3.5a2 2 0 0 0 0 4V20l-16.481.008C3.56 18.372 3 16.404 3 14.288c0-2.634.865-5.035 2.288-6.855 1.569-2.005 3.815-3.305 6.327-3.425zm0 0H4.278M15 13v.01M8 13v.01M11 16v.01"
    />
  </svg>
)
export default SvgCheese
