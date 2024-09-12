import * as React from 'react'
const SvgDrumkit = (props) => (
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
      strokeWidth={2}
      d="m4.41 13.3.065-.436c.28-.024.614-.042.986-.042.37 0 .772.019 1.193.067a7 7 0 0 0-.494.677zm14.993 0-1.75.266a7 7 0 0 0-.495-.677c.421-.048.823-.067 1.194-.067s.704.018.985.043zM8.669 16.527a3.24 3.24 0 0 1 3.237-3.237 3.24 3.24 0 0 1 3.238 3.237 3.24 3.24 0 0 1-3.238 3.238 3.24 3.24 0 0 1-3.237-3.238Z"
    />
  </svg>
)
export default SvgDrumkit
