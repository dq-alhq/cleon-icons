import * as React from 'react'
const SvgWriting = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 19-2-2V5c0-1.121.879-2 2-2s2 .879 2 2v12zm0 0H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6m10-4h4" />
  </svg>
)
export default SvgWriting
