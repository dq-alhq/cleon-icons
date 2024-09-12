import * as React from 'react'
const SvgSausage = (props) => (
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
      d="M5.195 5.519 3.952 3.53A1 1 0 0 1 4.8 2h1.392a1 1 0 0 1 .848 1.53L5.795 5.52m12.687 12.705 1.989-1.243a1 1 0 0 1 1.53.848v1.392a1 1 0 0 1-1.53.848l-1.991-1.245M5.5 5.5A2.5 2.5 0 0 0 3 8c0 7.18 5.82 13 13 13a2.5 2.5 0 0 0 0-5 8 8 0 0 1-8-8 2.5 2.5 0 0 0-2.5-2.5"
    />
  </svg>
)
export default SvgSausage
