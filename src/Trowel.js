import * as React from 'react'
const SvgTrowel = (props) => (
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
      d="m10 10 6.5 6.5m-2.08-7.442-5.362 5.363a1.978 1.978 0 0 1-3.275-.773L3.101 5.604a1.978 1.978 0 0 1 2.502-2.502l8.045 2.682a1.978 1.978 0 0 1 .772 3.274m4.927 7.517 1.08 1.079a1.96 1.96 0 1 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772"
    />
  </svg>
)
export default SvgTrowel
