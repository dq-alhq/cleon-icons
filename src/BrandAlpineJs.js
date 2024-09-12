import * as React from 'react'
const SvgBrandAlpineJs = (props) => (
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
      d="M23 11.5 17.757 17l-5.247-5.495L17.757 6zM6.243 6 1 11.5 6.243 17H16.73z"
    />
  </svg>
)
export default SvgBrandAlpineJs
