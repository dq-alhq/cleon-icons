import * as React from 'react'
const SvgOctagon = (props) => (
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
      d="M9.103 2h5.794a3 3 0 0 1 2.122.879L21.12 6.98A3 3 0 0 1 22 9.103v5.794a3 3 0 0 1-.879 2.122L17.02 21.12a3 3 0 0 1-2.122.879H9.103a3 3 0 0 1-2.122-.879l-4.101-4.1A3 3 0 0 1 2 14.897V9.103a3 3 0 0 1 .879-2.122L6.98 2.88A3 3 0 0 1 9.103 2"
    />
  </svg>
)
export default SvgOctagon
