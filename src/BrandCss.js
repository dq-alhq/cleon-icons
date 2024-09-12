import * as React from 'react'
const SvgBrandCss = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m3.36 2.64 1.538 17.25 6.9 1.95 6.937-1.95 1.537-17.25zm3.525 7.8h7.724l.226-2.175H6.698l-.19-2.1h10.614l-.976 10.8-4.312 1.2-4.387-1.2-.263-2.25 4.65 1.238 2.325-.637.263-2.738h-7.35z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandCss
