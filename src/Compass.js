import * as React from 'react'
const SvgCompass = (props) => (
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
      d="M3 12a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m-9 9h2m7 9a9 9 0 0 0 9-9m-9 9v-2m9-7a9 9 0 0 0-9-9m9 9h-2m-7-9v2M8 16l2-6 6-2-2 6z"
    />
  </svg>
)
export default SvgCompass
