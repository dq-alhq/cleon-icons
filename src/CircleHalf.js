import * as React from 'react'
const SvgCircleHalf = (props) => (
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
    <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M8.939 4.609A8 8 0 0 1 12 4v16A7.999 7.999 0 0 1 8.939 4.609" clipRule="evenodd" />
  </svg>
)
export default SvgCircleHalf
