import * as React from 'react'
const SvgWashingMachine = (props) => (
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
      d="m18 5.01.01-.011M12 16a3 3 0 0 1-3-3m12-9v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-9 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
    />
  </svg>
)
export default SvgWashingMachine
