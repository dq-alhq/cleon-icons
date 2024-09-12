import * as React from 'react'
const SvgMountain = (props) => (
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
      d="m7.5 11 2 2.5L12 11l2 3 2.5-2M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0z"
    />
  </svg>
)
export default SvgMountain
