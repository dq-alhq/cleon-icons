import * as React from 'react'
const SvgMessageCircle = (props) => (
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
      d="m3 20 1.3-3.9c-1.124-1.662-1.53-3.63-1.144-5.538S4.696 6.936 6.4 5.726c1.704-1.209 3.845-1.827 6.024-1.739 2.179.089 4.248.877 5.821 2.22 1.574 1.342 2.546 3.147 2.735 5.078s-.417 3.858-1.706 5.422c-1.29 1.564-3.173 2.659-5.302 3.08-2.13.422-4.358.142-6.272-.787z"
    />
  </svg>
)
export default SvgMessageCircle
