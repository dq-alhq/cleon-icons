import * as React from 'react'
const SvgClick = (props) => (
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
      d="M3 12h3m6-9v3M7.8 7.8 5.6 5.6m10.6 2.2 2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4z"
    />
  </svg>
)
export default SvgClick
