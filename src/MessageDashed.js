import * as React from 'react'
const SvgMessageDashed = (props) => (
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
      d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1m8.8 3.7a10.5 10.5 0 0 0-2.1-2.1m3.7 8.8c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5m-3.7 8.8a10.5 10.5 0 0 0 2.1-2.1m-8.8 3.7c.5.1 1 .1 1.5.1s1-.1 1.5-.1m-10-3.4L2 22l4.5-1.5m-3.4-10c0 .5-.1 1-.1 1.5s.1 1 .1 1.5m3.7-8.8a10.5 10.5 0 0 0-2.1 2.1"
    />
  </svg>
)
export default SvgMessageDashed