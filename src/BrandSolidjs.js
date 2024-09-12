import * as React from 'react'
const SvgBrandSolidjs = (props) => (
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
      d="M2 17.5Q9 22 12 22c2.5 0 4-1.5 4-3.5S14.5 15 12 15q-3 0-10 2.5m0 0 3-4Q12 11 15 11c2.5 0 4 1.5 4 3.5 0 .738-.204 1.408-.588 1.96l-2.883 3.825M19 10.5l3-4C18 3.5 14 2 12 2c-2.04 0-2.618.463-3.419 1.545L5.628 7.256M19 10.5a115 115 0 0 0-1.802-1.296C14.087 7.068 10.688 6 9 6 6.5 6 5 7 5 9.5c0 1.683.906 2.686 2.416 3.162M19 10.5l-2.302.785"
    />
  </svg>
)
export default SvgBrandSolidjs
