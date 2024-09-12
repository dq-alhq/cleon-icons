import * as React from 'react'
const SvgQuran = (props) => (
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
      d="M5 18a2 2 0 0 0 2 2h12V4H7a2 2 0 0 0-2 2zm0 0a2 2 0 0 1 2-2h12m-3.725-7.906c-.136-.125 0-.49 0-.667 0 .177.136.542 0 .667m0 0c.136.125.533 0 .725 0-.192 0-.589-.125-.725 0m0 0c-.136.125 0 .49 0 .666 0-.177.136-.541 0-.666m0 0c-.136-.125-.533 0-.725 0 .192 0 .59.125.725 0m-3.013-1.091h.142a2.44 2.44 0 0 0-.846 1.513 2.34 2.34 0 0 0 .403 1.66 2.7 2.7 0 0 0 1.465 1.04c.606.177 1.26.155 1.849-.065a3.05 3.05 0 0 1-1.072 1.26 3.44 3.44 0 0 1-1.623.575 3.5 3.5 0 0 1-1.714-.275 3.2 3.2 0 0 1-1.317-1.046 2.84 2.84 0 0 1-.545-1.519 2.8 2.8 0 0 1 .381-1.56c.279-.48.694-.88 1.2-1.16A3.5 3.5 0 0 1 12.262 7z"
    />
  </svg>
)
export default SvgQuran
