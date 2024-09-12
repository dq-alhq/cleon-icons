import * as React from 'react'
const SvgZodiacVirgo = (props) => (
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
      d="M3 4a2 2 0 0 1 2 2m0 0v9m0-9a2 2 0 1 1 4 0m0 0v9m0-9a2 2 0 1 1 4 0v10c0 1.326.738 2.598 2.05 3.535C16.363 20.473 18.143 21 20 21m-8 0c1.857 0 3.637-.527 4.95-1.465C18.263 18.598 19 17.327 19 16v-2a3 3 0 0 0-6 0"
    />
  </svg>
)
export default SvgZodiacVirgo
