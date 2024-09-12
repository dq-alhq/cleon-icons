import * as React from 'react'
const SvgShoppingCart = (props) => (
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
      d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0h11M6 17V3H4m13 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M6 5l14 1-1 7H6"
    />
  </svg>
)
export default SvgShoppingCart
