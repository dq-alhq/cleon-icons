import * as React from 'react'
const SvgBrandAngular = (props) => (
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
      fill="currentColor"
      d="M16.864 17.235H8.136l-1.115 2.673L12.5 23l5.479-3.092zM14.993 1l7.253 15.45L23 4.666zm-4.986 0L2 4.666l.754 11.784zm-.375 12.77h5.74L12.5 6.862z"
    />
  </svg>
)
export default SvgBrandAngular
