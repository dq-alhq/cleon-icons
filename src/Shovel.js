import * as React from 'react'
const SvgShovel = (props) => (
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
      d="m17 4 3 3m-1.5-1.5-8 8m-2.224-2.216 4.44 4.44a.967.967 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1-5.809-5.81l2.704-2.703a.966.966 0 0 1 1.37 0z"
    />
  </svg>
)
export default SvgShovel
