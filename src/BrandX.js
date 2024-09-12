import * as React from 'react'
const SvgBrandX = (props) => (
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
      d="M17.187 4.08h2.767l-6.045 6.913L21.02 20.4h-5.568l-4.36-5.705-4.99 5.705H3.334L9.8 13.006 2.978 4.08h5.708l3.942 5.215zm-.97 14.663h1.532L7.853 5.65H6.208z"
    />
  </svg>
)
export default SvgBrandX
