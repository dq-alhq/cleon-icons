import * as React from 'react'
const SvgBrandHtml = (props) => (
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
      d="m3.36 2.64 1.538 17.25 6.9 1.95 6.937-1.95 1.537-17.25zm5.663 7.8h7.724l-.6 6.525-4.312 1.2-4.387-1.2-.262-3.338h2.1l.149 1.688 2.4.637 2.325-.637.263-2.738h-7.35L6.51 6.164h10.612l-.187 2.1h-8.1z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandHtml
