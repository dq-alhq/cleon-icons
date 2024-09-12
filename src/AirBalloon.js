import * as React from 'react'
const SvgAirBalloon = (props) => (
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
      d="M12 16c3.314 0 6-4.686 6-8a6 6 0 0 0-6-6m0 14c-3.314 0-6-4.686-6-8a6 6 0 0 1 6-6m0 14c-.53 0-1.04-.738-1.414-2.05C10.21 12.637 10 10.857 10 9s.21-3.637.586-4.95C10.96 2.738 11.47 2 12 2m0 14c.53 0 1.04-.738 1.414-2.05C13.79 12.637 14 10.857 14 9s-.21-3.637-.586-4.95C13.04 2.738 12.53 2 12 2m-2 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
    />
  </svg>
)
export default SvgAirBalloon
