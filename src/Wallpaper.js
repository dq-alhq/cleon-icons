import * as React from 'react'
const SvgWallpaper = (props) => (
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
      d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6M8 6v12M8 6a2 2 0 1 0-4 0v12m2 2a2 2 0 0 1-2-2m2 2a2 2 0 0 0 2-2m-4 0a2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgWallpaper
