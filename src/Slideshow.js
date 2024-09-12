import * as React from 'react'
const SvgSlideshow = (props) => (
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
      d="M15 6h.01M3 13l4-4c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l4 4m-1-1 2-2c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l3 3M8 21h.01M12 21h.01M16 21h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
    />
  </svg>
)
export default SvgSlideshow
