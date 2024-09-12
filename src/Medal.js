import * as React from 'react'
const SvgMedal = (props) => (
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
      d="M12 4v3M8 4v6m8-6v6m-4 8.5L9 20l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 20z"
    />
  </svg>
)
export default SvgMedal
