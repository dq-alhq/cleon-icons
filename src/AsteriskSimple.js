import * as React from 'react'
const SvgAsteriskSimple = (props) => (
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
      d="M12 12V3m0 9L3 9.5m9 2.5 9-2.5M12 12l6 8.5M12 12l-6 8.5"
    />
  </svg>
)
export default SvgAsteriskSimple
