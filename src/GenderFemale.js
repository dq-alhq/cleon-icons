import * as React from 'react'
const SvgGenderFemale = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0 0v7m-3-3h6" />
  </svg>
)
export default SvgGenderFemale
