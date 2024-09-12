import * as React from 'react'
const SvgBrandDotenv = (props) => (
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
      d="M20 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-8.89 13.242H7.7v4.6h3.498v-.775H8.63v-1.253h2.309v-.775H8.628v-1.02h2.482zm1.79 0h-.904v4.6h.862v-3l1.855 3h.932v-4.6h-.863v3.071zm4.263 0h-1.006l1.644 4.6h.992l1.646-4.6h-.985l-1.126 3.404zM6.5 18.4H5.1v1.4h1.4z"
    />
  </svg>
)
export default SvgBrandDotenv
