import * as React from 'react'
const SvgSnowflake = (props) => (
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
      d="m10 4 2 1 2-1m-2-2v6.5l3 1.72m2.928-3.952.134 2.232 1.866 1.232M20.66 7l-5.629 3.25.01 3.458m4.887.56L18.062 15.5l-.134 2.232M20.66 17l-5.629-3.25-2.99 1.738M14 20l-2-1-2 1m2 2v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232M3.34 17l5.629-3.25-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232M3.34 7l5.629 3.25 2.99-1.738"
    />
  </svg>
)
export default SvgSnowflake