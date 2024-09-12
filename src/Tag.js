import * as React from 'react'
const SvgTag = (props) => (
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
    <path fill="currentColor" d="M8.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v3.859c0 .537.213 1.052.593 1.432l8.116 8.116a2.023 2.023 0 0 0 2.864 0l4.834-4.834a2.023 2.023 0 0 0 0-2.864L12.29 4.593A2.03 2.03 0 0 0 10.859 4H7a3 3 0 0 0-3 3"
    />
  </svg>
)
export default SvgTag
