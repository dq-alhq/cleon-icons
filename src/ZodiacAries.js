import * as React from 'react'
const SvgZodiacAries = (props) => (
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
      d="M12 5a5 5 0 1 0-4 8m4-8a5 5 0 1 1 4 8m-4-8v16"
    />
  </svg>
)
export default SvgZodiacAries
