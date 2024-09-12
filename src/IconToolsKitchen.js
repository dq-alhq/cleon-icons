import * as React from 'react'
const SvgIconToolsKitchen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 15V3c-4.816 4.594-5.023 8.319-5 12zm0 0v6h-1v-3M8 12v6M4 3h8l-1 9H5zm3 15h2v3H7z"
    />
  </svg>
)
export default SvgIconToolsKitchen
