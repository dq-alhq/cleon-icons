import * as React from 'react'
const SvgBucket = (props) => (
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
      d="M4 7c0 1.06.843 2.078 2.343 2.828S9.878 11 12 11s4.157-.421 5.657-1.172S20 8.061 20 7M4 7c0-1.06.843-2.078 2.343-2.828S9.878 3 12 3s4.157.421 5.657 1.172S20 5.939 20 7M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.5-1.5 2.737-10.035A7.5 7.5 0 0 0 20 7"
    />
  </svg>
)
export default SvgBucket
