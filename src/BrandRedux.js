import * as React from 'react'
const SvgBrandRedux = (props) => (
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
      d="M16.54 7c-.805-2.365-2.536-4-4.54-4-2.774 0-5.023 2.632-5.023 6.496 0 1.956 1.582 4.727 2.512 6m-4.778-3.517C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9 1.703-.979 2.875-3.362 3.516-4.798m-.503 5.998c2.511 0 4.523-.438 5.487-2.1 1.387-2.39-.215-5.893-3.579-7.824-1.702-.979-4.357-1.235-5.927-1.07m-.502.866a1 1 0 1 0 .243-1.831 1 1 0 0 0-.243 1.831M8.5 15.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6-1.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
)
export default SvgBrandRedux
