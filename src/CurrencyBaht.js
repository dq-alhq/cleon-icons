import * as React from 'react'
const SvgCurrencyBaht = (props) => (
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
      d="M11 4v2m0 12v2M8 6h5a3 3 0 0 1 3 3v.143A2.857 2.857 0 0 1 13.143 12H8h5a3 3 0 0 1 3 3v.143A2.857 2.857 0 0 1 13.143 18H8z"
    />
  </svg>
)
export default SvgCurrencyBaht
