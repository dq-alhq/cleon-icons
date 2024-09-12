import * as React from 'react'
const SvgMeat = (props) => (
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
      d="m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.82m-12.691 1.29c1.17-1.17 4.337.096 7.07 2.83s4 5.899 2.828 7.07c-1.17 1.172-4.337-.094-7.07-2.828s-4-5.9-2.828-7.071m0 0c3.905-3.904 9.287-4.854 12.02-2.12 2.734 2.733 1.784 8.115-2.121 12.02M7.5 16l1 1"
    />
  </svg>
)
export default SvgMeat
