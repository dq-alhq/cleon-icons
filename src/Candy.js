import * as React from 'react'
const SvgCandy = (props) => (
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
      d="m16.243 9.172 3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.667a1.5 1.5 0 0 0-2.44.47L14.122 7.05m-4.95 9.193L8.4 19.329a1.5 1.5 0 0 1-2.516.697L3.667 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248m0-2.829 4.243-4.243a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-4.243 4.243a2 2 0 0 1-2.828 0L7.05 14.12a2 2 0 0 1 0-2.828z"
    />
  </svg>
)
export default SvgCandy
