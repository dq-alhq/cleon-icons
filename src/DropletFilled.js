import * as React from 'react'
const SvgDropletFilled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.801 11.003A6 6 0 1 0 17.197 11L12 3zM12 3v17ZM12 12l3.544-3.544ZM12 17.3l5.558-5.558Z"
    />
  </svg>
)
export default SvgDropletFilled
