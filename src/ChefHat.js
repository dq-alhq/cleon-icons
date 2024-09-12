import * as React from 'react'
const SvgChefHat = (props) => (
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
      d="M6.161 17.009 18 17M12 3c1.918 0 3.52 1.35 3.91 3.151A4 4 0 0 1 18 13.874V21H6v-7.126a4.002 4.002 0 0 1-2.121-6.306 4 4 0 0 1 4.213-1.417A4 4 0 0 1 12 3"
    />
  </svg>
)
export default SvgChefHat
