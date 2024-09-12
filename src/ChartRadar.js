import * as React from 'react'
const SvgChartRadar = (props) => (
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
      d="m12 3 9.5 7M12 3l-9.5 7M12 3v10m9.5-3L18 21m3.5-11L12 13m6 8H6m12 0-6-8m-6 8L2.5 10M6 21l6-8m-9.5-3 9.5 3m0-5.5 5.5 4L15 17H8.5l-2-5.5z"
    />
  </svg>
)
export default SvgChartRadar
