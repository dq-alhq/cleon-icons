import * as React from 'react'
const SvgIconTelescope = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 21 6-5 6 5m-6-8v8m2-16 3 5.5M3.294 13.678l.166.281c.52.88 1.624 1.265 2.605.91l14.242-5.165a1.022 1.022 0 0 0 .565-1.456l-2.62-4.705a1.087 1.087 0 0 0-1.447-.42l-.056.032-12.694 7.618c-1.02.613-1.357 1.897-.76 2.905z"
    />
  </svg>
)
export default SvgIconTelescope
